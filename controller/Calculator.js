let CalculationModel = require('../models/Calculation');

exports.saveExpression = async (req, res) => {
  try {
    let { token, expression } = req.body;

    let newCalculation = new CalculationModel({
      token,
      expression,
    });

    let result = await newCalculation.save();

    console.log({ result });

    return res.status(200).send({ result: result });
  } catch (error) {
    return res.status(400).send({ error: error });
  }
};

exports.getHistory = async (req, res) => {
  try {
    let { token } = req.body;

    // get the history based on the token
    let result = await CalculationModel.find({ token: token });

    console.log({ result });

    return res.status(200).send({ result: result });
  } catch (error) {
    return res.status(400).send({ error: error });
  }
};

exports.clearHistory = async (req, res) => {
  try {
    let { token } = req.body;

    let deleteResult = await CalculationModel.deleteMany({ token });

    console.log({ deleteResult });

    return res.status(200).send({ result: deleteResult });
  } catch (error) {
    return res.status(400).send({ error: error });
  }
};
