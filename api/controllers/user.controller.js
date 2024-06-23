export const getUsers = async (req, res) => {
  console.log("ir works");
  try {
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to get users!" });
  }
};

export const getUser = async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to get user!" });
  }
};
export const apdateUser = async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to apdate users!" });
  }
};
export const deleteUsers = async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Failed to delete users!" });
  }
};
