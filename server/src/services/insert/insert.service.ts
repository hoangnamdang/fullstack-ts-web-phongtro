// import chothuephongtro from "../../data/chothuephongtro.json";
// import nhachothue from "../../data/nhachothue.json";
import chothuecanho from "../../data/chothuecanho.json";
import chothuematbang from "../../data/chothuematbang.json";
import {parse} from "date-fns"
import { v4 } from "uuid";
import { Post, Category, Image, Overview, Label, Attribute} from "../../models";
import { generateLabelCode } from "../../utils/generateCode";
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
  new Promise(async (resolve, reject) => {
    try {
      const categoryCode = "CTCH";
      const categoryValue = "Cho thuê căn hộ";
      const categoryHeader = chothuecanho?.header?.title;
      const categorySubheader = chothuecanho?.header?.description;
    
      await Category.create({
        code: categoryCode,
        value: categoryValue,
        header: categoryHeader,
        subheader: categorySubheader,
      });
      for (let item of chothuecanho.body) {
        const header: HeaderAttributes = item?.header
        const labelCode = generateLabelCode(item?.overview?.content.find((i) => i.name === "Chuyên mục:")
        ?.content || "");
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
          attributesId: attributeId,
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
        await Label.findOrCreate({
          where: {code: labelCode},
          defaults: {
            code: labelCode,
            value: item?.overview?.content.find((i) => i.name === "Chuyên mục:")
            ?.content || "",
          }
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
      resolve("done");
    } catch (error) {
      reject(error);
    }
  });
