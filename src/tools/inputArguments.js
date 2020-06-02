const _ = require("lodash")

const getArguments = (argv) => {
  return _.chain(argv
    .slice(2))
      .join(" ")
        .split(",")
          .filter(a=>!!a)
            .map(_.trim) 
              .value()
}

exports.getArguments = getArguments
