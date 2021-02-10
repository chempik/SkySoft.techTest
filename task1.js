class Singleton {

    constructor() 
    {
      return Singleton.getInstance();
    }

    static getInstance() 
    {
        if (Singleton.instance !== null) 
        {
            Singleton.instance = this;
        }

        return Singleton.instance;
    }
  }

  const tests = [];
  tests.push(Singleton.getInstance() === new Singleton()); // My additional test
  tests.push(new Singleton() === new Singleton());
  tests.push(Singleton.getInstance() === new Singleton());
  tests.push(Singleton.getInstance() === Singleton.getInstance());
  console.log(tests); // all items should be ‘true’ 