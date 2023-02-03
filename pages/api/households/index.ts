// api/households/index.ts
import { NextApiRequest, NextApiResponse } from "next";
import { getHouseholds, createHousehold } from "../../../lib/household";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "GET": {
      const households = await getHouseholds();
      return res.status(200).json(households);
    }

    case "POST": {
      const { amount, categoryId } = req.body;
      await createHousehold(amount, categoryId);
      return res.redirect(302, "http://localhost:3000/");
    }

    default: {
      return res.status(405).json({ msg: "wat ?" });
    }
  }
};

export default handler;
