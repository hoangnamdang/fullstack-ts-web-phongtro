// import chothuephongtro from "../../data/chothuephongtro.json";
// import nhachothue from "../../data/nhachothue.json";
// import chothuecanho from "../../data/chothuecanho.json";
import chothuematbang from "../../data/chothuematbang.json";
import {parse} from "date-fns"
import vi from "date-fns/locale/vi";
import { v4 } from "uuid";
import { Category } from "../../models/category";
import { generateCode } from "../../utils/generateCode";
import { Post } from "../../models/post";
import { Overview } from "../../models/overview";
import { Label } from "../../models/label";
import { Attribute } from "../../models/attribute";
import Image from "../../models/image";
interface HeaderAttributes {
    title: string;
    address: string;
    star?: string;
    attributes: {
        price: string;
        acreage: string;
        published: string;
        hashtag: string;
}
}
export const insertData = () =>
  new Promise(async (resove, reject) => {
    try {
      const categoryCode = "CTMB";
      const categoryValue = "Cho thuê mặt bằng";
      const categoryHeader = chothuematbang?.header?.title;
      const categorySubheader = chothuematbang?.header?.description;
    
      await Category.create({
        code: categoryCode,
        value: categoryValue,
        header: categoryHeader,
        subheader: categorySubheader,
      });
      for (let item of chothuematbang.body) {
        const header: HeaderAttributes = item?.header
        const labelCode = generateCode(5);
        const attributesId = v4();
        const userId = v4();
        const overviewId = v4();
        const imagesId = v4();
        const postId = v4();
        const attributeId = v4();

        await Post.create({
          id: postId,
          title: header.title,
          star: header.star || "",
          labelCode: labelCode,
          address: header.address,
          attributesId: attributesId,
          categoryCode: categoryCode,
          description: JSON.stringify(item?.mainContent?.content),
          userId: userId,
          overviewId: overviewId,
          imagesId: imagesId,
        });

        await Overview.create({
          id: overviewId,
          code: item?.overview?.content.find((i) => i.name === "Mã tin:")
            ?.content || "",
          area: item?.overview?.content.find((i) => i.name === "Khu vực")
            ?.content || "",
          type: item?.overview?.content.find((i) => i.name === "Loại tin rao:")
            ?.content || "",
          target: item?.overview?.content.find(
            (i) => i.name === "Đối tượng thuê:"
          )?.content || "",
          bonus: item?.overview?.content.find((i) => i.name === "Gói tin:")
            ?.content || "",
          created: new Date(parse(item?.overview?.content.find(
            (i) => i.name === "Ngày đăng:"
          )?.content || "", "EEEE k:mm MM/dd/yyyy", new Date())),
          expired: new Date(parse(item?.overview?.content.find(
            (i) => i.name === "Ngày hết hạn:"
          )?.content || "", "EEEE k:mm MM/dd/yyyy", new Date())),
        });
        await Label.create({
          code: labelCode,
          value: item?.overview?.content.find((i) => i.name === "Chuyên mục:")
            ?.content || "",
        });
        await Attribute.create({
          id: attributeId,
          price: header?.attributes?.price,
          acreage: header?.attributes?.acreage,
          published: header?.attributes?.published,
          hashtag: header?.attributes?.hashtag,
        });
        await Image.create({
          id: imagesId,
          image: JSON.stringify(item?.images),
        });
      }
      resove("done");
    } catch (error) {
      reject(error);
    }
  });
