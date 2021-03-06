const Report = require('../../models/report.model');
const { ERROR, SUCCESS } = require('../../utils/msgTypes');

const deleteReport = (req, res) => {
  Report.deleteOne({ _id: req.params.id })
    .exec()
    .then(() => {
      res.status(200).json({
        deleteId: req.params.id,
        success: true,
        message: {
          type: SUCCESS,
          content: 'The report was deleted successfully.',
        },
      });
    })
    .catch((error) =>
      res.status(500).json({
        error,
        message: {
          type: ERROR,
          content: 'This is not supposed to happen, Please report this to us.',
        },
      })
    );
};

module.exports = deleteReport;
