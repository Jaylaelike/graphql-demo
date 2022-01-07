const Query = {
    name() {
      return "Nongjay";
    },
    age() {
      return 27;
    },
    isSingle() {
      return null;
    },
    numbers() {
      return [100, 299, 354, 674, 4235];
    },
    location() {
      return {
        state: "Thailand",
        city: "Chumphon",
        passcode: 214324,
      };
    },
    users(parent, args, ctx, info){
        const { users } = ctx;
        return users;
    }
  }

module.exports = Query;