import { NextApiRequest, NextApiResponse } from "next";
import { categoryDB } from "../../fakeDb";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "GET": {
      return res.status(200).json(categoryDB);
    }

    case "POST": {
      return res.status(302).json({ msg: "Posted :^)" });
    }

    default: {
      return res.status(405).json({ msg: "wat ?" });
    }
  }
};

export default handler;
