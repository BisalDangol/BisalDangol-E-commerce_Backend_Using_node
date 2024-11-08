/**
 * validating the user data in signup
 */

const verifyUserSignUpBody = (req, res, next) => {
  try {
    //user name varifying
    if (!req.body.name) {
      return res.status(400).json({ message: "Name is required" });
    }
    //user email varifying
    if (!req.body.email) {
      return res.status(400).json({ message: "Email is required" });
    }
    //user  userid varifying
    if (!res.body.userId){
        return res.status(400).json({message:"userId is required"})
    }
    //userid is already or not
  } catch (error) {
    console.log("something wents wrong");
    res.status(500).send({
      message: "Internal Server Error",
    });
    
  }
};
