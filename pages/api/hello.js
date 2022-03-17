// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  // const slug = req.query.slug;

  // const ipAddress = req.headers["x-forwarded-for"] || "0.0.0.0";

  // try {
  //   // if (req.method === "POST") {
  //   //   const ipV4 = ipAddress;
  //   //   res.status(201).json({
  //   //     slug,
  //   //     ipV4,
  //   //   });
  //   // } else {
  //   //   res.status(405).json({ message: "Method Not Allowed" });
  //   // }
  // } catch (er) {
  //   console.log(err);
  //   res
  //     .status(505)
  //     .json({ message: err.message ?? "Internal error in you phone" });
  // }
  res.status(200).json({ name: "John Doe" });
}
