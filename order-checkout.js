var app = new Vue ({
    el: '#app',
    data() {
        return {
            entrees: [
              {
                id: 1,
                name: "Pizza",
                description: "Our signature pizza made with fresh mozarella, tomato sauce, and homemade dough. Top this pizza off with some fresh pepperoni or sausage!",
                image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                price: "$9 - $15",
                calories: "1000 - 2500 cals",
                options: 
                {
                  size: null,
                  toppings: null,
                  extras: null
                }
              },
              {
                id: 2,
                name: "Western Burger",
                description: "Our western burger comes with a quarter pound patty, onion straws, cheddar cheese, coleslaw, and our own secret barbeque based sauce.",
                image: "https://cdn.glitch.me/b3806d69-c990-4a1d-b329-05a54867004c%2Ftyler-nix-TD-ZLyLNRFI-unsplash.jpg?v=1638406600316",
                price: "$8",
                calories: "1200 cals",
                options: 
                {
                  onions: null,
                  cheese: null,
                  coleslaw: null,
                  sauce: null
                }
              },
              {
                id: 3,
                name: "Tacos",
                description: "Three tacos built by you with a choice of chicken or steak. These tacos can be served in a soft or hard shell, with many other customizations.",
                image: "https://media.istockphoto.com/photos/three-carne-asada-mexican-street-tacos-in-corn-tortilla-with-lime-picture-id1272532786?b=1&k=20&m=1272532786&s=170667a&w=0&h=A9vIzqorCIquAwtRDq0lQ14bMmzHOrcS5cJD92af6IY=",
                price: "$9",
                calories: "500 - 1000 cals",
                options: 
                {
                  meat: null,
                  shell: null,
                  rice: null,
                  beans: null,
                  salsa: null
                }
              },
              {
                id: 4,
                name: "Chicken Alfredo",
                description: "Our homemade sauce with butter, cream, and parmesan cheese makes a great topping for our fettuccine pasta topped off with grilled chicken.",
                image: "https://www.jessicagavin.com/wp-content/uploads/2019/08/chicken-alfredo-8-1200.jpg",
                price: "$9",
                calories: "1000 cals",
                options: 
                {
                  sauce: null,
                }
              },
              {
                id: 5,
                name: "Bone-in Ribeye Steak",
                description: "A 10 oz premium cut bone-in ribeye steak that is grilled to your specification and seasoned to perfection with our special and secret combination.",
                image: "https://assets.kansascitysteaks.com/dyn-images/pdp_hero/Bone-In_Ribeye_Holid-dd3ecd870e30b6a46da4f0ea0925f38a.jpg",
                price: "$20",
                calories: "850 cals",
                options: 
                {
                  doneness: null,
                }
              },
              {
                id: 6,
                name: "Chicken Caesar Salad",
                description: "The classic salad featuring it's traditional recipe of croutons, parmesan cheese, and our special caesar dressing, which is topped off with grilled chicken ",
                image: "https://images.media-allrecipes.com/userphotos/3186344.jpg",
                price: "$9",
                calories: "750 cals",
                options: 
                {
                  croutons: null,
                  cheese: null,
                  dressing: null
                }
              },
              {
                id: 7,
                name: "Nashville Sliders",
                description: "Two Nashville hot chicken sliders served with coleslaw, pickles, and our secret sauce. Customize the spice level to your liking",
                image: "https://cdn.vox-cdn.com/thumbor/50zHc4RhuRSNHMKt98innpN9d0s=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22519575/The_Angry_Chickz.jpg",
                price: "$9",
                calories: "1200 cals",
                options: 
                {
                  heat: null,
                  coleslaw: null,
                  pickles: null,
                  sauce: null
                }
              },
              {
                id: 8,
                name: "Coconut Shrimp Platter",
                description: "Our coconut shrimp platter includes 15 butterflied shrimp crusted with sweet coconut batter and our housemade orange-chili dipping sauce",
                image: "http://images.ctfassets.net/lufu0clouua1/4Sseu9aPKMI8B1RZTbP8It/2735861572d384e8ab88b2937c75f07d/Coconut-Shrimp-Platter-34570.jpg",
                price: "$12",
                calories: "1200 cals",
                options: 
                {
                  sauce: null
                }
              },
              
            ], // End of products
          
            // Start of drinks
          
            drinks: [
              {
                id: 1,
                name: "Soft Drink",
                description: "Enjoy some of your favorite classic flavored soft drinks, such as Coke and Sprite, in a variety of sizes with or without ice",
                image: "https://www.mentaldaily.com/wp-content/uploads/2021/11/75790057.jpg",
                price: "$2 - $4",
                calories: "200 - 600 cals",
                options:
                {
                  size: null,
                  flavor: null,
                  ice: null
                }
              },
              {
                id: 2,
                name: "Tea",
                description: "Enjoy some of your favorite classic teas, such as Chai, Black, Green, and Herbal in a variety of sizes with or without ice",
                image: "https://cdn-prod.medicalnewstoday.com/content/images/articles/324/324771/close-up-of-a-cup-of-tea.jpg",
                price: "$2 - $4",
                calories: "150 - 550 cals",
                options:
                {
                  size: null,
                  flavor: null,
                  ice: null
                }
              },
              {
                id: 3,
                name: "Lemonade",
                description: "Enjoy some classic freshly made lemonade with our special twist on it in a variety of sizes with or without ice",
                image: "https://media.istockphoto.com/photos/mason-jar-glasses-of-homemade-lemonade-on-rustic-wood-picture-id537228258?k=20&m=537228258&s=612x612&w=0&h=2XEwWGGf2mDa2H8owDv2pfaOwZUDbIcMZBbujTa2-70=",
                price: "$2 - $4",
                calories: "150 - 550 cals",
                options:
                {
                  size: null,
                  ice: null
                }
              },
              {
                id: 4,
                name: "Milkshake",
                description: "Enjoy some some of your favorite classic milkshakes, such as Vanilla, Chocolate, and Strawberry in a variety of sizes.",
                image: "https://media.istockphoto.com/photos/milkshake-trio-picture-id172192393?k=20&m=172192393&s=612x612&w=0&h=dhTrLSSECEurcCAkwRksdlj9C2EM64liK0nCJvF0CWY=",
                price: "$3 - $5",
                calories: "400 - 800 cals",
                options:
                {
                  size: null,
                  flavor: null
                }
              },
            ], // End of drinks
          
          sides: [
            {
              id: 1,
                name: "Fries",
                description: "Enjoy some classic french fries that come from fresh potatoes every morning that are then sliced, deep-fried and salted to perfection.",
                image: "https://media.istockphoto.com/photos/basket-of-famous-fast-food-french-fries-picture-id618214356?b=1&k=20&m=618214356&s=170667a&w=0&h=hBW1Ozw37xluDdo98v4U1JoRlU3elGRUIWFHmGUfmK8=",
                price: "$3 - $5",
                calories: "400 - 1000 cals",
                options:
                {
                  size: null,
                }
            },
            {
              id: 2,
                name: "Breadsticks",
                description: "Enjoy our crisp, dry baked breadsticks that are filled with buttery, garlic goodness that are made fresh from scratch everyday.",
                image: "https://media.istockphoto.com/photos/bread-sticks-picture-id804846708?k=20&m=804846708&s=612x612&w=0&h=GuxN19R3UJk7yXbmN9nP7tfdrejqAKdzZQZJa_Izeqg=",
                price: "$4 - $8",
                calories: "400 - 1200 cals",
                options:
                {
                  size: null,
                }
            },
            {
              id: 3,
                name: "Chips and Salsa",
                description: "Enjoy fresh homemade tortilla chips that pair perfectly with our variety of salsa selections. These also come in a variety of sizes.",
                image: "https://c4.wallpaperflare.com/wallpaper/478/823/744/chips-wallpaper-preview.jpg",
                price: "$2 - $4",
                calories: "200 - 600 cals",
                options:
                {
                  size: null,
                  salsa: null
                }
            },
            {
              id: 4,
                name: "Gyoza",
                description: "Enjoy these pork-filled Japanese pan-fried dumplings that are crisp yet chewy and pair perfectly with our homemade dipping sauce.",
                image: "https://img.freepik.com/free-photo/japanese-gyoza-dumplings-snack_1339-12233.jpg?size=626&ext=jpg",
                price: "$5 - $9",
                calories: "500 - 1100 cals",
                options:
                {
                  size: null,
                }
            },
          
            
          ],
          
            //Initialized to be manipulated later for loops food modal loop accuracy 
            modalEntree: {},
            modalDrink: {},
            modalSide: {},
            cart: [],
            cartTotal: null,
            orderTotal: 0,
            description: null,
            orderError: false,
            //DISCOUNT TESTING
            loggedIn: false,
          
            // Stripe instance; says Stripe isn't defined, but it should work
            stripeInstance: Stripe('pk_test_51Jq6F2IRsBjWL3HoLBPC4U2p4gWPH4GGch1P3hY25tD6InNL2snDRJHeAzLJ7ydotCeIpbrrPNhPJ2V861XRBHet00B2FzMNLA'),
            stripeCart: [],

          
        }
    }, //End of Data
  
    // Watch and Mount from Vue Docs; allows for cart to hold value when switching pages
  
    watch: {
    cart(newValue, oldValue) {
      localStorage.setItem("cart", JSON.stringify(newValue));
    },
    stripeCart(newValue, oldValue) {
      localStorage.setItem("stripeCart", JSON.stringify(newValue));
    },
      orderTotal(newValue, oldValue) {
      localStorage.setItem("orderTotal", JSON.stringify(newValue));
    },
    // DISCOUNT TESTING
    loggedIn(newValue, oldValue) {
      localStorage.setItem("loggedIn", JSON.stringify(newValue));
    },
  },
  mounted() {
    if (localStorage.getItem('cart')) {
      try {
        this.cart = JSON.parse(localStorage.getItem('cart'));
      } catch(e) {
        localStorage.removeItem('cart');
      }
    }
    if (localStorage.getItem('stripeCart')) {
      try {
        this.stripeCart = JSON.parse(localStorage.getItem('stripeCart'));
      } catch(e) {
        localStorage.removeItem('stripeCart');
      }
    }
    if (localStorage.getItem('orderTotal')) {
      try {
        this.orderTotal = JSON.parse(localStorage.getItem('orderTotal'));
      } catch(e) {
        localStorage.removeItem('orderTotal');
      }
    }
    // DISCOUNT TESTING
    if (localStorage.getItem('loggedIn')) {
      try {
        this.loggedIn = JSON.parse(localStorage.getItem('loggedIn'));
      } catch(e) {
        localStorage.removeItem('loggedIn');
      }
    }
  },
    
    
  
    methods: {
      
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////// ENTREE SECTION ////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
      
      // Used to allow food modals to follow loop of food cards
      setModalEntree (entree) {
        
        this.modalEntree = entree;
        // sets validation to false when user clicks to edit an item so they can't add to cart until they fill out all options 
        this.orderError = true;
        document.getElementById("addEntreeModal").hidden = true;
        //set attribute doesn't seem to work if hidden already exists and using .hidden is working
        document.getElementById("disabledCartButton").hidden = false;
        
        
      }, //End of setModalEntree
      
      
      // If user fills out all the options for an item, the button to add to cart will be enabled
      
      entreeValidation (entree, modalEntree) {
        
        // Entree 1 - Pizza
        
        if (modalEntree.name == "Pizza") {
          if (entree.options.size && entree.options.toppings && entree.options.extras) {
            this.orderError = false;
            document.getElementById("addEntreeModal").hidden = false;
            //using .hidden only seems to work if hidden attribute is already present; setAttribute seems to add it if not there
            document.getElementById("disabledCartButton").setAttribute("hidden", true);
          } else {
            this.orderError = true;
          }
        }
        
        // Entree 2 - Western Burger
        
        if (modalEntree.name == "Western Burger") {
          if (entree.options.onions && entree.options.cheese && entree.options.coleslaw && entree.options.sauce) {
            this.orderError = false;
            document.getElementById("addEntreeModal").hidden = false;
            document.getElementById("disabledCartButton").setAttribute("hidden", true);
          } else {
            this.orderError = true;
          }
        }
        
        // Entree 3 - Tacos
        
        if (modalEntree.name == "Tacos") {
          if (entree.options.meat && entree.options.shell && entree.options.rice && entree.options.beans && entree.options.salsa) {
            this.orderError = false;
            document.getElementById("addEntreeModal").hidden = false;
            document.getElementById("disabledCartButton").setAttribute("hidden", true);
          } else {
            this.orderError = true;
          }
        } 
        
        // Entree 4 - Chicken Alfredo
        
        if (modalEntree.name == "Chicken Alfredo") {
          if (entree.options.sauce) {
            this.orderError = false;
            document.getElementById("addEntreeModal").hidden = false;
            document.getElementById("disabledCartButton").setAttribute("hidden", true);
          } else {
            this.orderError = true;
          }
        } 
        
        // Entree 5 - Bone-in Ribeye Steak
        
        if (modalEntree.name == "Bone-in Ribeye Steak") {
          if (entree.options.doneness) {
            this.orderError = false;
            document.getElementById("addEntreeModal").hidden = false;
            document.getElementById("disabledCartButton").setAttribute("hidden", true);
          } else {
            this.orderError = true;
          }
        } 
        
        // Entree 6 - Chicken Caesar Salad
        
        if (modalEntree.name == "Chicken Caesar Salad") {
          if (entree.options.croutons && entree.options.cheese && entree.options.dressing) {
            this.orderError = false;
            document.getElementById("addEntreeModal").hidden = false;
            document.getElementById("disabledCartButton").setAttribute("hidden", true);
          } else {
            this.orderError = true;
          }
        } 
        
        // Entree 7 - Nashville Chicken Sliders
        
        if (modalEntree.name == "Nashville Sliders") {
          if (entree.options.heat && entree.options.coleslaw && entree.options.pickles && entree.options.sauce) {
            this.orderError = false;
            document.getElementById("addEntreeModal").hidden = false;
            document.getElementById("disabledCartButton").setAttribute("hidden", true);
          } else {
            this.orderError = true;
          }
        } 
        
        // Entree 8 - Coconut Shrimp Platter
        
        if (modalEntree.name == "Coconut Shrimp Platter") {
          if (entree.options.sauce) {
            this.orderError = false;
            document.getElementById("addEntreeModal").hidden = false;
            document.getElementById("disabledCartButton").setAttribute("hidden", true);
          } else {
            this.orderError = true;
          }
        } 
        
        
      }, // end of entreeValidation
      
      // adds entrees to cart 
      addEntreeToCart (entree, modalEntree) {
        // creates order
        let order = {
          name: modalEntree.name,
          image: modalEntree.image
        }
        
        //checks to see if entree has unique ingredient and then adds as a property to current order object
        
        // Pizza
        
        if (modalEntree.name == "Pizza") {
          order.size = entree.options.size;
          order.toppings = entree.options.toppings;
          order.extras = entree.options.extras;
          this.description = [("Size: " + order.size), ("Toppings: " + order.toppings), ("Extras: " + order.extras)];
          order.orderDescription = this.description;
          if (order.size == "small") {
            order.stripePrice = 'price_1K1n09IRsBjWL3Hol89Qx9kZ';
            order.displayPrice = 9;
          }
          if (order.size == "medium") {
            order.stripePrice = 'price_1K1n7dIRsBjWL3HoyJ9IXpS6';
            order.displayPrice = 12;
          }
          if (order.size == "large") {
            order.stripePrice = 'price_1K1n8UIRsBjWL3HoVKSux7FB';
            order.displayPrice = 15;
          }
          
        }
        
        // Western Burger
        
        if (modalEntree.name == "Western Burger") {
          order.onions = entree.options.onions;
          order.cheese = entree.options.cheese;
          order.coleslaw = entree.options.coleslaw;
          order.sauce = entree.options.sauce;
          this.description = [("Onions: " + order.onions), ("Cheese: " + order.cheese), ("Coleslaw: " + order.coleslaw), ("Sauce: " + order.sauce)];
          order.orderDescription = this.description;
          order.displayPrice = 8;
          order.stripePrice = 'price_1K22VPIRsBjWL3HowzVyhaBl';
        }
        
        // Tacos
        
        if (modalEntree.name == "Tacos") {
          order.meat = entree.options.meat;
          order.shell = entree.options.shell;
          order.rice = entree.options.rice;
          order.beans = entree.options.beans;
          order.salsa = entree.options.salsa;
          this.description = [("Meat: " + order.meat), ("Shell: " + order.shell), ("Rice: " + order.rice), ("Beans: " + order.beans), ("Salsa: " + order.salsa),];
          order.orderDescription = this.description;
          order.displayPrice = 9;
          order.stripePrice = 'price_1K2Qz8IRsBjWL3HoBiEcJfdh';
        }
        
        // Chicken Alfredo
        
        if (modalEntree.name == "Chicken Alfredo") {
          order.sauce = entree.options.sauce;
          this.description = [("Sauce: " + order.sauce)];
          order.orderDescription = this.description;
          order.displayPrice = 9;
          order.stripePrice = 'price_1K2XbUIRsBjWL3Ho7alm8GAT';
        }
        
        // Bone-in Ribeye Steak
        
        if (modalEntree.name == "Bone-in Ribeye Steak") {
          order.doneness = entree.options.doneness;
          this.description = [("Doneness: " + order.doneness)];
          order.orderDescription = this.description;
          order.displayPrice = 20;
          order.stripePrice = 'price_1K2YPCIRsBjWL3HoY2EseMl8';
        }
        
        // Chicken Caesar Salad
        
        if (modalEntree.name == "Chicken Caesar Salad") {
          order.croutons = entree.options.croutons;
          order.cheese = entree.options.cheese;
          order.dressing = entree.options.dressing;
          this.description = [("Croutons: " + order.croutons), ("Cheese: " + order.cheese), ("Dressing: " + order.dressing),];
          order.orderDescription = this.description;
          order.displayPrice = 9;
          order.stripePrice = 'price_1K2mleIRsBjWL3HoKADEaUEu';
        }
        
        // Nashville Chicken Sliders
        
        if (modalEntree.name == "Nashville Sliders") {
          order.heat = entree.options.heat;
          order.coleslaw = entree.options.coleslaw;
          order.pickles = entree.options.pickles;
          order.sauce = entree.options.sauce;
          this.description = [("Heat: " + order.heat), ("Coleslaw: " + order.coleslaw), ("Pickles: " + order.pickles), ("Sauce: " + order.sauce)];
          order.orderDescription = this.description;
          order.displayPrice = 9;
          order.stripePrice = 'price_1K2tUSIRsBjWL3HoqE9DvPjZ';
        }
        
        // Coconut Shrimp Platter
        
        if (modalEntree.name == "Coconut Shrimp Platter") {
          order.sauce = entree.options.sauce;
          this.description = [("Sauce: " + order.sauce)];
          order.orderDescription = this.description;
          order.displayPrice = 12;
          order.stripePrice = 'price_1K36hNIRsBjWL3HoaZ7RaxuE';
        }
        // end of if checks
        
        // adds entree order to cart and to stripe cart
        this.cart.push(order);
        this.orderToStripe(order);
        this.resetItem(entree, modalEntree);
        this.cartSum();
        
      }, // end of add entree to cart method
      
      // resets modal form options if user closes/cancels window or orders an item
      
      resetItem (entree, modalEntree) {
        for (let item in entree.options) {
          entree.options[item] = null;
        }
      },
      
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////// DRINK SECTION /////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
      
    // Used to allow drink modals to follow loop of drink cards
      setModalDrink (drink) {
        
        this.modalDrink = drink;
        // sets validation to false when user clicks to edit an item so they can't add to cart until they fill out all options 
        this.orderError = true;
        document.getElementById("addDrinkModal").hidden = true;
        //set attribute doesn't seem to work if hidden already exists and using .hidden is working
        document.getElementById("disabledDrinkCartButton").hidden = false;
        
      }, //End of setModalEntree
      
      // If user fills out all the options for an item, the button to add to cart will be enabled
      
      drinkValidation (drink, modalDrink) {
        
        // Drink 1 - Soft Drink
        
        if (modalDrink.name == "Soft Drink") {
          if (drink.options.size && drink.options.flavor && drink.options.ice) {
            this.orderError = false;
            document.getElementById("addDrinkModal").hidden = false;
            //using .hidden only seems to work if hidden attribute is already present; setAttribute seems to add it if not there
            document.getElementById("disabledDrinkCartButton").setAttribute("hidden", true);
          } else {
            this.orderError = true;
          }
        }
        
        // Drink 2 - Tea
        
        if (modalDrink.name == "Tea") {
          if (drink.options.size && drink.options.flavor && drink.options.ice) {
            this.orderError = false;
            document.getElementById("addDrinkModal").hidden = false;
            //using .hidden only seems to work if hidden attribute is already present; setAttribute seems to add it if not there
            document.getElementById("disabledDrinkCartButton").setAttribute("hidden", true);
          } else {
            this.orderError = true;
          }
        }
        
        // Drink 3 - Lemonade
        
        if (modalDrink.name == "Lemonade") {
          if (drink.options.size && drink.options.ice) {
            this.orderError = false;
            document.getElementById("addDrinkModal").hidden = false;
            //using .hidden only seems to work if hidden attribute is already present; setAttribute seems to add it if not there
            document.getElementById("disabledDrinkCartButton").setAttribute("hidden", true);
          } else {
            this.orderError = true;
          }
        }
        
        // Drink 4 - Milkshake
        
        if (modalDrink.name == "Milkshake") {
          if (drink.options.size && drink.options.flavor) {
            this.orderError = false;
            document.getElementById("addDrinkModal").hidden = false;
            //using .hidden only seems to work if hidden attribute is already present; setAttribute seems to add it if not there
            document.getElementById("disabledDrinkCartButton").setAttribute("hidden", true);
          } else {
            this.orderError = true;
          }
        }
        
      }, // end of drinkValidation
      
      // adds drink to cart 
      addDrinkToCart (drink, modalDrink) {
        // creates order
        let order = {
          name: modalDrink.name,
          size: drink.options.size,
          image: modalDrink.image
        }
        
        // Drink 1 - Soft Drink
        
        if (modalDrink.name == "Soft Drink") {
          order.flavor = drink.options.flavor;
          order.ice = drink.options.ice;
          this.description = [("Size: " + order.size), ("Flavor: " + order.flavor), ("Ice: " + order.ice)];
          order.orderDescription = this.description;
          if (order.size == "small") {
            order.stripePrice = 'price_1K38ntIRsBjWL3HoJHo05E1X';
            order.displayPrice = 2;
          }
          if (order.size == "medium") {
            order.stripePrice = 'price_1K38ofIRsBjWL3HoJjt3e1vO';
            order.displayPrice = 3;
          }
          if (order.size == "large") {
            order.stripePrice = 'price_1K38pSIRsBjWL3HokRjk8rPG';
            order.displayPrice = 4;
          }
        }
        
        // Drink 2 - Tea
        
        if (modalDrink.name == "Tea") {
          order.flavor = drink.options.flavor;
          order.ice = drink.options.ice;
          this.description = [("Size: " + order.size), ("Flavor: " + order.flavor), ("Ice: " + order.ice)];
          order.orderDescription = this.description;
          if (order.size == "small") {
            order.stripePrice = 'price_1K3A1ZIRsBjWL3Hod5eZ1l9F';
            order.displayPrice = 2;
          }
          if (order.size == "medium") {
            order.stripePrice = 'price_1K3A2sIRsBjWL3Ho4lJYDOp4';
            order.displayPrice = 3;
          }
          if (order.size == "large") {
            order.stripePrice = 'price_1K3A3MIRsBjWL3HoZJ2TFFRK';
            order.displayPrice = 4;
          }
        }
        
        // Drink 3 - Lemonade
        
        if (modalDrink.name == "Lemonade") {
          order.ice = drink.options.ice;
          this.description = [("Size: " + order.size), ("Ice: " + order.ice)];
          order.orderDescription = this.description;
          if (order.size == "small") {
            order.stripePrice = 'price_1K3ALMIRsBjWL3HoCnYiY1gz';
            order.displayPrice = 2;
          }
          if (order.size == "medium") {
            order.stripePrice = 'price_1K3ALsIRsBjWL3Ho0ommE7UM';
            order.displayPrice = 3;
          }
          if (order.size == "large") {
            order.stripePrice = 'price_1K3AMUIRsBjWL3HoVb4UzzFJ';
            order.displayPrice = 4;
          }
        }
        
        // Drink 4 - Milkshake
        
        if (modalDrink.name == "Milkshake") {
          order.flavor = drink.options.flavor;
          this.description = [("Size: " + order.size), ("Flavor: " + order.flavor)];
          order.orderDescription = this.description;
          if (order.size == "small") {
            order.stripePrice = 'price_1K3AVFIRsBjWL3Ho3pe6tFEY';
            order.displayPrice = 3;
          }
          if (order.size == "medium") {
            order.stripePrice = 'price_1K3AVsIRsBjWL3HoNXyE5c5c';
            order.displayPrice = 4;
          }
          if (order.size == "large") {
            order.stripePrice = 'price_1K3AWLIRsBjWL3HocjRn72Tf';
            order.displayPrice = 5;
          }
        }
        
        // adds drink to cart and to stripe cart
        this.cart.push(order);
        this.orderToStripe(order);
        this.resetItem(drink, modalDrink);
        this.cartSum();
        
      }, // end of add to cart method
      
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////// SIDES SECTION /////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////    
      
      // Used to allow food modals to follow loop of food cards
      setModalSide (side) {
        
        this.modalSide = side;
        // sets validation to false when user clicks to edit an item so they can't add to cart until they fill out all options 
        this.orderError = true;
        document.getElementById("addSideModal").hidden = true;
        //set attribute doesn't seem to work if hidden already exists and using .hidden is working
        document.getElementById("disabledSideCartButton").hidden = false;
        
      }, 
      
      // If user fills out all the options for an item, the button to add to cart will be enabled
      
      sideValidation (side, modalSide) {
        
        // Side 1 - Fries
        
        if (modalSide.name == "Fries") {
          if (side.options.size) {
            this.orderError = false;
            document.getElementById("addSideModal").hidden = false;
            //using .hidden only seems to work if hidden attribute is already present; setAttribute seems to add it if not there
            document.getElementById("disabledSideCartButton").setAttribute("hidden", true);
          } else {
            this.orderError = true;
          }
        }
        
        // Side 2 - Breadsticks
        
        if (modalSide.name == "Breadsticks") {
          if (side.options.size) {
            this.orderError = false;
            document.getElementById("addSideModal").hidden = false;
            //using .hidden only seems to work if hidden attribute is already present; setAttribute seems to add it if not there
            document.getElementById("disabledSideCartButton").setAttribute("hidden", true);
          } else {
            this.orderError = true;
          }
        }
        
        // Side 3 - Chips and Salsa
        
        if (modalSide.name == "Chips and Salsa") {
          if (side.options.size && side.options.salsa) {
            this.orderError = false;
            document.getElementById("addSideModal").hidden = false;
            //using .hidden only seems to work if hidden attribute is already present; setAttribute seems to add it if not there
            document.getElementById("disabledSideCartButton").setAttribute("hidden", true);
          } else {
            this.orderError = true;
          }
        }
        
        // Side 4 - Gyoza
        
        if (modalSide.name == "Gyoza") {
          if (side.options.size) {
            this.orderError = false;
            document.getElementById("addSideModal").hidden = false;
            //using .hidden only seems to work if hidden attribute is already present; setAttribute seems to add it if not there
            document.getElementById("disabledSideCartButton").setAttribute("hidden", true);
          } else {
            this.orderError = true;
          }
        }
         
      }, // end of sideValidation
      
      // adds side to cart 
      addSideToCart (side, modalSide) {
        // creates order
        let order = {
          name: modalSide.name,
          size: side.options.size,
          image: modalSide.image
        }
        
        // Side 1 - Fries
        
        if (modalSide.name == "Fries") {
          this.description = [("Size: " + order.size)];
          order.orderDescription = this.description;
          if (order.size == "small") {
            order.stripePrice = 'price_1K3B2kIRsBjWL3HoyB8A9d4R';
            order.displayPrice = 3;
          }
          if (order.size == "medium") {
            order.stripePrice = 'price_1K3B3KIRsBjWL3HoUBTKLxXi';
            order.displayPrice = 4;
          }
          if (order.size == "large") {
            if (this.loggedIn == true) {
              order.stripePrice = 'price_1KrrzSIRsBjWL3HoccCwm7K5';
              order.displayPrice = 4;
              order.orderDescription.push("Member discount applied");
            } else {
              order.stripePrice = 'price_1K3B5zIRsBjWL3HoiTZY4Bxw';
              order.displayPrice = 5;
            }
          }
        }
        
        // Side 2 - Breadsticks
        
        if (modalSide.name == "Breadsticks") {
          this.description = [("Size: " + order.size)];
          order.orderDescription = this.description;
          if (order.size == "small") {
            order.stripePrice = 'price_1K3BeaIRsBjWL3HoOxnrom39';
            order.displayPrice = 4;
          }
          if (order.size == "medium") {
            order.stripePrice = 'price_1K3Bf7IRsBjWL3Ho6mqkG5SV';
            order.displayPrice = 6;
          }
          if (order.size == "large") {
            //Discount Test
            if (this.loggedIn == true) {
              console.log("discount add to cart test working");
              order.stripePrice = 'price_1Krt84IRsBjWL3HowRzkZ3kg';
              order.displayPrice = 6;
              order.orderDescription.push("Member discount applied");
            } else {
              order.stripePrice = 'price_1Kruz6IRsBjWL3HozDJu2dpj';
              order.displayPrice = 8;
            }
          }
        }
        
        // Side 3 - Chips and Salsa
        
        if (modalSide.name == "Chips and Salsa") {
          order.salsa = side.options.salsa;
          this.description = [("Size: " + order.size), ("Salsa: " + order.salsa)];
          order.orderDescription = this.description;
          if (order.size == "small") {
            order.stripePrice = 'price_1K3BiJIRsBjWL3Howgd17IlN';
            order.displayPrice = 2;
          }
          if (order.size == "medium") {
            order.stripePrice = 'price_1K3B3KIRsBjWL3HoUBTKLxXi';
            order.displayPrice = 3;
          }
          if (order.size == "large") {
            //Discount Test
            if (this.loggedIn == true) {
              order.stripePrice = 'price_1KtLR3IRsBjWL3Ho6CLqJM00';
              order.displayPrice = 3;
              order.orderDescription.push("Member discount applied");
            } else {
              order.stripePrice = 'price_1K3Bj3IRsBjWL3HofX7F5BsO';
              order.displayPrice = 4;
            }
          }
        }
        
        // Side 4 - Gyoza
        
        if (modalSide.name == "Gyoza") {
          this.description = [("Size: " + order.size)];
          order.orderDescription = this.description;
          if (order.size == "small") {
            order.stripePrice = 'price_1K3BkFIRsBjWL3HoiCEC3R1I';
            order.displayPrice = 5;
          }
          if (order.size == "medium") {
            order.stripePrice = 'price_1K3BkdIRsBjWL3HoBkIT0pUf';
            order.displayPrice = 7;
          }
          if (order.size == "large") {
            //Discount Test
            if (this.loggedIn == true) {
              order.stripePrice = 'price_1KtM4rIRsBjWL3Ho36BV0WO0';
              order.displayPrice = 7;
              order.orderDescription.push("Member discount applied");
            } else {
              order.stripePrice = 'price_1K3BlDIRsBjWL3HoCVF87TFe';
              order.displayPrice = 9;
            }
          }
        }
        
        // adds drink to cart and to stripe cart
        this.cart.push(order);
        this.orderToStripe(order);
        this.resetItem(side, modalSide);
        this.cartSum();
        
      }, // end of add to cart method
      
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////// DELETE FUNCTION //////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    // deletes specified item from cart on checkout page
      
      deleteItem (index) {
        
        //Discount delete test
        console.log("Cart pre delete:")
        console.log(this.cart);
        console.log(this.stripeCart);
        
        for (const item in this.stripeCart) {
          if (this.stripeCart[item].price == this.cart[index].stripePrice) {
            console.log("MATCH TEST");
            if (this.stripeCart[item].quantity > 1) {
              this.stripeCart[item].quantity--;
              this.stripeCart.splice(item, 1, this.stripeCart[item]);
              console.log("DELETE TEST: " + this.stripeCart[item].quantity)
            } else if (this.stripeCart[item].quantity == 1) {
              this.stripeCart.splice(item, 1);
              console.log("Quantity 1 Delete Test");
            }
          }
        }
        this.cart.splice(index, 1);
        this.cartSum();
        
        //Discount delete test
        console.log("Cart post delete:")
        console.log(this.cart);
        console.log(this.stripeCart);
        
      },  
      
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////// CART TOTAL FUNCTION ///////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
      
      // updates total cost of cart; to be displayed on checkout page in checkout summary section
      
      cartSum () {
        
        this.cartTotal = 0;
        
        for (const item in this.cart) {
          this.cartTotal += this.cart[item].displayPrice;
        }
        
        this.orderTotal = this.cartTotal;
      },
      
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////// STRIPE SECTION ////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////////////////
      
      
      // Converts cart into a stripe cart that Stripe API can use for checkout; also deals with duplicate items in cart
      
      orderToStripe (order) {
        
        let stripeProduct = {
          price: order.stripePrice,
          quantity: 1
        };
    
        let found = false;      
        
        // If cart is empty, it pushes first item without trying to compare to nonexistant items in cart 
        if (this.stripeCart.length == 0) {
          this.stripeCart.push(stripeProduct);
        } else { // If cart has an item, it compares price of current stripeProduct with prices in stripeCart
          for (const item in this.stripeCart) {
            if (this.stripeCart[item].price == stripeProduct.price) {
              found = true;
              this.stripeCart[item].quantity++;
              this.stripeCart.splice(item, 1, this.stripeCart[item]);
              console.log(this.stripeCart)
            }
          }
          if (found == false) {
            this.stripeCart.push(stripeProduct);
          }
        }
        
      }, // End of orderToStripe
      
      // Method from Stripe docs
      stripeCheckout () {
        
        var stripe = this.stripeInstance;
        
        stripe.redirectToCheckout({
        lineItems: this.stripeCart,
        mode: 'payment',
        successUrl: 'http://35.222.17.140/success-order.html',
        cancelUrl: 'http://35.222.17.140/checkout.html',
      }).then(function (result) {
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer
        // using `result.error.message`.
      });
      }, // End of StripeCheckout
      
      // Clears cart if payment is successful 
      clearCart () {
        localStorage.clear();
      },
      
      // DISCOUNT TESTING
      logIn () {
        console.log("Login status Pre: " + this.loggedIn);
        if (this.loggedIn == false) {
          this.loggedIn = true
        }
        else if (this.loggedIn == true) {
          this.loggedIn = false
        }
        console.log("Login status Post: " + this.loggedIn);
        
        this.applyDiscount();
      },
      //If user has discount applicable items in cart, discount will be applied upon login; testing by making large fries the price of medium fries
      applyDiscount () {
        for (const item in this.cart) {
          
          // FRIES
          
          if (this.cart[item].stripePrice == 'price_1K3B5zIRsBjWL3HoiTZY4Bxw') {
            // Changes price displayed on checkout
            this.cart[item].displayPrice = 4;
            //append to order description that it is discounted
            this.cart[item].orderDescription.push("Member discount applied");
            //splice array to overwrite current entry at index
            this.cart.splice(item, 1, this.cart[item]);
            // Changes stripe price; price when checking out
            for (const stripeItem in this.stripeCart) {
              if (this.cart[item].stripePrice == this.stripeCart[stripeItem].price) {
                console.log("Match found when comparing cart price IDs")
                // Replaces stripe price
                this.stripeCart[stripeItem].price = 'price_1KrrzSIRsBjWL3HoccCwm7K5';
                this.stripeCart.splice(stripeItem, 1, this.stripeCart[stripeItem]);
                // Replaces stripe price in normal cart; needed when deleting item
                this.cart[item].stripePrice = 'price_1KrrzSIRsBjWL3HoccCwm7K5';
                this.cart.splice(item, 1, this.cart[item]);
              } 
            }
          }
          // END OF FRIES
            
          // Breadsticks

          if (this.cart[item].stripePrice == 'price_1Kruz6IRsBjWL3HozDJu2dpj') {
            // Changes price displayed on checkout
            this.cart[item].displayPrice = 6;
            //append to order description that it is discounted
            this.cart[item].orderDescription.push("Member discount applied");
            //splice array to overwrite current entry at index
            this.cart.splice(item, 1, this.cart[item]);
            // Changes stripe price; used for checking out
            for (const stripeItem in this.stripeCart) {
              if (this.cart[item].stripePrice == this.stripeCart[stripeItem].price) {
                console.log("Match found when comparing cart price IDs")
                // Replaces stripe price in stripe cart
                this.stripeCart[stripeItem].price = 'price_1Krt84IRsBjWL3HowRzkZ3kg';
                this.stripeCart.splice(stripeItem, 1, this.stripeCart[stripeItem]);
                // Replaces stripe price in normal cart; needed when deleting item
                this.cart[item].stripePrice = 'price_1Krt84IRsBjWL3HowRzkZ3kg';
                this.cart.splice(item, 1, this.cart[item]);
              } 
            }
          }
          // END OF BREADSTICKS
          
          // Chips and Salsa

          if (this.cart[item].stripePrice == 'price_1K3Bj3IRsBjWL3HofX7F5BsO') {
            // Changes price displayed on checkout
            this.cart[item].displayPrice = 3;
            //append to order description that it is discounted
            this.cart[item].orderDescription.push("Member discount applied");
            //splice array to overwrite current entry at index
            this.cart.splice(item, 1, this.cart[item]);
            // Changes stripe price; used for checking out
            for (const stripeItem in this.stripeCart) {
              if (this.cart[item].stripePrice == this.stripeCart[stripeItem].price) {
                console.log("Match found when comparing cart price IDs")
                // Replaces stripe price in stripe cart
                this.stripeCart[stripeItem].price = 'price_1KtLR3IRsBjWL3Ho6CLqJM00';
                this.stripeCart.splice(stripeItem, 1, this.stripeCart[stripeItem]);
                // Replaces stripe price in normal cart; needed when deleting item
                this.cart[item].stripePrice = 'price_1KtLR3IRsBjWL3Ho6CLqJM00';
                this.cart.splice(item, 1, this.cart[item]);
              } 
            }
          }
          // END OF CHIPS AND SALSA
          
          // Gyoza

          if (this.cart[item].stripePrice == 'price_1K3BlDIRsBjWL3HoCVF87TFe') {
            // Changes price displayed on checkout
            this.cart[item].displayPrice = 7;
            //append to order description that it is discounted
            this.cart[item].orderDescription.push("Member discount applied");
            //splice array to overwrite current entry at index
            this.cart.splice(item, 1, this.cart[item]);
            // Changes stripe price; used for checking out
            for (const stripeItem in this.stripeCart) {
              if (this.cart[item].stripePrice == this.stripeCart[stripeItem].price) {
                console.log("Match found when comparing cart price IDs")
                // Replaces stripe price in stripe cart
                this.stripeCart[stripeItem].price = 'price_1KtM4rIRsBjWL3Ho36BV0WO0';
                this.stripeCart.splice(stripeItem, 1, this.stripeCart[stripeItem]);
                // Replaces stripe price in normal cart; needed when deleting item
                this.cart[item].stripePrice = 'price_1KtM4rIRsBjWL3Ho36BV0WO0';
                this.cart.splice(item, 1, this.cart[item]);
              } 
            }
          }
          // END OF GYOZA
          
          // Recalculates cart total
          this.cartSum();
        }
      },
      
      phpTest () {
        alert("PHP Call to JS worked!");
      }
  
    }, //End of Methods
  
})
