export const handleErrors = (error, req, res, next) => {
  if (error) {
    console.log(error);
    res.status(500).send("Internal Server error");
  }
};
