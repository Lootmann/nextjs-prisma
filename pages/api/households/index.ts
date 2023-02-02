import { NextApiRequest, NextApiResponse } from "next";
import { getHouseholds } from "../../../lib/household";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "GET": {
      const households = await getHouseholds();
      return res.status(200).json(households);
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
