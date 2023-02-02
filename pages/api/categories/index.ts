import { NextApiRequest, NextApiResponse } from "next";
import { getCategories } from "../../../lib/category";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "GET": {
      const categories = await getCategories();
      return res.status(200).json(categories);
    }

    case "POST": {
      // TODO: get req.body args named name
      console.log("TODO: {api/categories/idnex.ts}");
      return res.status(302).json({ msg: "Posted :^)" });
    }

    default: {
      return res.status(405).json({ msg: "wat ?" });
    }
  }
};

export default handler;
