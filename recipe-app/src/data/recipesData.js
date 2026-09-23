/**
 * recipesData.js
 * Central single source of truth for all recipe data in the Platr app.
 * Provides detailed objects for recipes across diverse meal types and difficulty levels.
 */

export const RECIPES_DATA = [
  {
    id: "1",
    title: "Rich Miso Vegetarian Ramen with Jammy Eggs",
    description:
      "A deeply comforting Japanese ramen with a rich, savory miso broth, bouncy noodles, soft-boiled marinated eggs, sautéed mushrooms, and crisp bok choy.",
    cookTime: "30 min",
    prepTime: "15 min",
    servings: 2,
    calories: "520 kcal",
    difficulty: "Hard",
    mealType: "Dinner",
    cuisine: "Japanese",
    tags: ["Vegetarian", "Dinner", "Japanese", "Comfort Food"],
    featured: true,
    image:
      "https://images.unsplash.com/photo-1526318896980-cf78c088247c?auto=format&fit=crop&w=600&q=80",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    audioTip: {
      title: "Mastering Jammy Eggs",
      subtitle: "Chef Maria - 6-Minute Egg Technique",
      duration: "1:45",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    },
    ingredients: [
      { item: "Fresh ramen noodles", amount: "200g" },
      { item: "White or red miso paste", amount: "3 tbsp" },
      { item: "Vegetable broth", amount: "4 cups" },
      { item: "Sesame oil", amount: "1 tbsp" },
      { item: "Garlic cloves (minced)", amount: "3" },
      { item: "Fresh ginger (grated)", amount: "1 tbsp" },
      { item: "Shiitake mushrooms (sliced)", amount: "1 cup" },
      { item: "Baby bok choy (halved)", amount: "2 heads" },
      { item: "Soft-boiled jammy eggs", amount: "2" },
      { item: "Green onions & nori sheets", amount: "for garnish" },
    ],
    instructions: [
      {
        step: 1,
        title: "Aromatics Base",
        text: "Heat sesame oil in a medium pot over medium heat. Sauté minced garlic and grated ginger for 1 minute until fragrant.",
      },
      {
        step: 2,
        title: "Simmer Broth",
        text: "Whisk in miso paste with a ladle of warm vegetable broth until smooth. Pour in the remaining broth and simmer gently for 10 minutes.",
      },
      {
        step: 3,
        title: "Cook Vegetables & Noodles",
        text: "In a separate pot of boiling water, cook noodles according to package instructions. Blanch bok choy and sauté mushrooms until tender.",
      },
      {
        step: 4,
        title: "Assemble & Garnish",
        text: "Divide noodles into bowls, drop in the hot miso broth, and top with jammy halved eggs, bok choy, mushrooms, scallions, and nori.",
      },
    ],
  },
  {
    id: "2",
    title: "Classic Shakshuka with Feta & Herbs",
    description:
      "North African skillet dish of gently poached eggs in a vibrant, spiced tomato and bell pepper sauce, finished with crumbled feta and fresh cilantro.",
    cookTime: "25 min",
    prepTime: "10 min",
    servings: 3,
    calories: "380 kcal",
    difficulty: "Easy",
    mealType: "Breakfast",
    cuisine: "Mediterranean",
    tags: ["Gluten Free", "Breakfast", "Vegetarian", "Mediterranean"],
    featured: true,
    image:
      "https://images.unsplash.com/photo-1590412200988-a436970781fa?auto=format&fit=crop&w=600&q=80",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    audioTip: {
      title: "Gentle Egg Poaching",
      subtitle: "Chef Antoine - Low Heat Simmer Secrets",
      duration: "2:10",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    },
    ingredients: [
      { item: "Large eggs", amount: "4-5" },
      { item: "Crushed canned tomatoes", amount: "1 can (400g)" },
      { item: "Red bell pepper (diced)", amount: "1 large" },
      { item: "Yellow onion (diced)", amount: "1 medium" },
      { item: "Garlic cloves (minced)", amount: "3" },
      { item: "Ground cumin & smoked paprika", amount: "1 tsp each" },
      { item: "Crumbled feta cheese", amount: "1/2 cup" },
      { item: "Fresh parsley & cilantro", amount: "1/4 cup chopped" },
      { item: "Crusty sourdough bread", amount: "for serving" },
    ],
    instructions: [
      {
        step: 1,
        title: "Sauté Veggies",
        text: "Heat olive oil in a large cast-iron skillet. Cook diced onion and bell pepper until soft and caramelized, about 6-8 minutes.",
      },
      {
        step: 2,
        title: "Spice & Simmer",
        text: "Stir in garlic, cumin, paprika, and a pinch of cayenne. Add crushed tomatoes, season with salt and pepper, and simmer for 10 minutes until thick.",
      },
      {
        step: 3,
        title: "Poach Eggs",
        text: "Create small wells in the sauce with the back of a spoon. Crack an egg into each well. Cover and simmer over medium-low heat for 6-8 minutes until whites are set.",
      },
      {
        step: 4,
        title: "Garnish & Serve",
        text: "Remove from heat, sprinkle generously with crumbled feta and fresh herbs, and serve immediately with toasted crusty bread.",
      },
    ],
  },
  {
    id: "3",
    title: "Pan-Seared Salmon with Lemon-Dill Quinoa",
    description:
      "Crispy skin salmon fillets cooked to perfection, served over fluffy lemon-dill quinoa and tender roasted asparagus spears.",
    cookTime: "40 min",
    prepTime: "15 min",
    servings: 2,
    calories: "590 kcal",
    difficulty: "Medium",
    mealType: "Dinner",
    cuisine: "American",
    tags: ["Pescatarian", "Dinner", "High Protein", "Gluten Free"],
    featured: true,
    image:
      "https://images.unsplash.com/photo-1727056353458-d985e6aa06b4?auto=format&fit=crop&w=600&q=80",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    audioTip: {
      title: "The Perfect Salmon Sear",
      subtitle: "Chef Maria - Skin-Crisping Guide",
      duration: "2:45",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    },
    ingredients: [
      { item: "Fresh salmon fillets (skin-on)", amount: "2 (6 oz each)" },
      { item: "White or tricolor quinoa (rinsed)", amount: "1 cup" },
      { item: "Vegetable or chicken broth", amount: "2 cups" },
      { item: "Fresh asparagus (trimmed)", amount: "1 bunch" },
      { item: "Fresh dill (chopped)", amount: "2 tbsp" },
      { item: "Lemon (zest and juice)", amount: "1 large" },
      { item: "Olive oil & butter", amount: "2 tbsp each" },
      { item: "Garlic powder, sea salt, pepper", amount: "to taste" },
    ],
    instructions: [
      {
        step: 1,
        title: "Cook Quinoa",
        text: "Bring broth and quinoa to a boil in a small saucepan. Cover, reduce heat to low, and simmer for 15 minutes. Fluff with fork, stir in lemon zest, juice, and dill.",
      },
      {
        step: 2,
        title: "Roast Asparagus",
        text: "Toss asparagus in 1 tbsp olive oil, salt, and pepper. Roast in a preheated 400°F (200°C) oven for 10-12 minutes until tender-crisp.",
      },
      {
        step: 3,
        title: "Sear Salmon",
        text: "Pat salmon fillets thoroughly dry. Season with salt and pepper. Heat oil and butter in a stainless or cast-iron skillet over medium-high heat. Place salmon skin-side down and press gently for 4-5 minutes until skin is golden and crisp. Flip and cook 2-3 minutes more.",
      },
      {
        step: 4,
        title: "Plate & Serve",
        text: "Spoon quinoa onto plates, top with roasted asparagus and seared salmon fillet. Garnish with additional fresh dill and lemon wedges.",
      },
    ],
  },
  {
    id: "4",
    title: "Perfect Poached Egg Avocado Toast",
    description:
      "Artisanal seeded sourdough layered with creamy smashed avocado, chili flakes, microgreens, and a velvety poached egg.",
    cookTime: "15 min",
    prepTime: "5 min",
    servings: 1,
    calories: "340 kcal",
    difficulty: "Easy",
    mealType: "Breakfast",
    cuisine: "American",
    tags: ["Breakfast", "Vegetarian", "Quick & Easy", "Healthy"],
    featured: false,
    image:
      "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&w=600&q=80",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    audioTip: {
      title: "Foolproof Egg Poaching",
      subtitle: "Chef Ken - Vortex & Vinegar Method",
      duration: "1:30",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    },
    ingredients: [
      { item: "Thick sourdough bread", amount: "1-2 slices" },
      { item: "Ripe Hass avocado", amount: "1" },
      { item: "Fresh organic egg", amount: "1-2" },
      { item: "Lemon juice", amount: "1 tsp" },
      { item: "Red pepper chili flakes", amount: "1/4 tsp" },
      { item: "Flaky sea salt & black pepper", amount: "to taste" },
      { item: "Microgreens or arugula", amount: "handful" },
    ],
    instructions: [
      {
        step: 1,
        title: "Toast & Smash",
        text: "Toast sourdough until golden and sturdy. In a small bowl, mash avocado with lemon juice, salt, and black pepper.",
      },
      {
        step: 2,
        title: "Poach Egg",
        text: "Bring a small pot of water with a dash of white vinegar to a gentle simmer. Create a gentle whirlpool, drop the egg in the center, and poach for 3 minutes.",
      },
      {
        step: 3,
        title: "Layer & Garnish",
        text: "Spread smashed avocado generously over toast, place drained poached egg on top, and season with flaky salt, pepper flakes, and microgreens.",
      },
    ],
  },
  {
    id: "5",
    title: "Nourishing Sweet Potato & Quinoa Bowl",
    description:
      "Roasted spiced sweet potato cubes, fluffy tri-color quinoa, steamed kale, crunchy chickpeas, and creamy turmeric tahini dressing.",
    cookTime: "35 min",
    prepTime: "15 min",
    servings: 2,
    calories: "460 kcal",
    difficulty: "Medium",
    mealType: "Lunch",
    cuisine: "American",
    tags: ["Lunch", "Vegan", "Gluten Free", "Meal Prep"],
    featured: false,
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    audioTip: {
      title: "Tahini Dressing Balance",
      subtitle: "Chef Amina - Emulsification Secrets",
      duration: "1:55",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    },
    ingredients: [
      { item: "Medium sweet potatoes (cubed)", amount: "2" },
      { item: "Cooked quinoa", amount: "1.5 cups" },
      { item: "Canned chickpeas (rinsed & drained)", amount: "1 can (400g)" },
      { item: "Curly kale (stemmed and chopped)", amount: "2 cups" },
      { item: "Tahini paste", amount: "3 tbsp" },
      { item: "Maple syrup & lemon juice", amount: "1 tbsp each" },
      { item: "Warm water (to thin dressing)", amount: "2-3 tbsp" },
      { item: "Ground cumin, paprika, garlic powder", amount: "1 tsp each" },
    ],
    instructions: [
      {
        step: 1,
        title: "Roast Sweet Potatoes & Chickpeas",
        text: "Toss sweet potato cubes and chickpeas with olive oil, cumin, paprika, and salt. Spread on a baking sheet and roast at 400°F for 25-30 minutes.",
      },
      {
        step: 2,
        title: "Whisk Dressing",
        text: "In a small jar, vigorously whisk tahini, lemon juice, maple syrup, garlic powder, and warm water until velvety and pourable.",
      },
      {
        step: 3,
        title: "Massage Kale",
        text: "Toss kale with a few drops of olive oil and massage with fingers for 1 minute until tender and bright green.",
      },
      {
        step: 4,
        title: "Assemble Bowl",
        text: "Arrange quinoa, massaged kale, roasted sweet potatoes, and crispy chickpeas in bowls. Drizzle with generous tahini dressing.",
      },
    ],
  },
  {
    id: "6",
    title: "Mediterranean Chickpea & Herb Salad",
    description:
      "A refreshing and protein-rich salad tossed with crisp cucumbers, cherry tomatoes, kalamata olives, diced red onion, and tangy lemon-oregano vinaigrette.",
    cookTime: "15 min",
    prepTime: "15 min",
    servings: 4,
    calories: "310 kcal",
    difficulty: "Easy",
    mealType: "Lunch",
    cuisine: "Mediterranean",
    tags: ["Lunch", "Vegetarian", "Mediterranean", "Quick & Easy"],
    featured: false,
    image:
      "https://images.unsplash.com/photo-1568897798550-91c8caffe391?auto=format&fit=crop&w=600&q=80",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4",
    audioTip: {
      title: "Marinating Chickpeas",
      subtitle: "Chef Nikos - Herb Infusion Technique",
      duration: "1:20",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
    },
    ingredients: [
      {
        item: "Canned chickpeas (rinsed & drained)",
        amount: "2 cans (400g each)",
      },
      { item: "English cucumber (diced)", amount: "1 large" },
      { item: "Cherry tomatoes (halved)", amount: "1.5 cups" },
      { item: "Kalamata olives (pitted and sliced)", amount: "1/2 cup" },
      { item: "Red onion (finely diced)", amount: "1/3 cup" },
      { item: "Feta cheese (crumbled)", amount: "1/2 cup" },
      { item: "Extra virgin olive oil", amount: "3 tbsp" },
      {
        item: "Red wine vinegar & dried oregano",
        amount: "1.5 tbsp vinegar, 1 tsp oregano",
      },
    ],
    instructions: [
      {
        step: 1,
        title: "Chop Vegetables",
        text: "Dice cucumber, halve cherry tomatoes, slice olives, and finely chop red onion and fresh parsley.",
      },
      {
        step: 2,
        title: "Make Vinaigrette",
        text: "Whisk olive oil, red wine vinegar, dried oregano, salt, and pepper in the bottom of a large salad bowl.",
      },
      {
        step: 3,
        title: "Toss & Chill",
        text: "Add chickpeas and chopped veggies into the bowl. Toss thoroughly to coat in dressing. Fold in crumbled feta cheese and chill 15 minutes before serving.",
      },
    ],
  },
  {
    id: "7",
    title: "Tuscan Garlic Herb Chicken Breast",
    description:
      "Juicy golden chicken breasts smothered in a luxurious creamy garlic, sun-dried tomato, and baby spinach sauce.",
    cookTime: "30 min",
    prepTime: "10 min",
    servings: 4,
    calories: "540 kcal",
    difficulty: "Medium",
    mealType: "Dinner",
    cuisine: "Italian",
    tags: ["Dinner", "High Protein", "Italian", "Comfort Food"],
    featured: false,
    image:
      "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=600&q=80",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    audioTip: {
      title: "Pan Searing Chicken Breasts",
      subtitle: "Chef Lorenzo - Temperature Control",
      duration: "2:05",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
    },
    ingredients: [
      {
        item: "Boneless skinless chicken breasts",
        amount: "2 large (halved horizontally)",
      },
      { item: "Garlic cloves (minced)", amount: "4" },
      { item: "Sun-dried tomatoes (chopped)", amount: "1/2 cup" },
      { item: "Fresh baby spinach", amount: "2 cups" },
      { item: "Heavy cream or coconut cream", amount: "3/4 cup" },
      { item: "Chicken broth", amount: "1/2 cup" },
      { item: "Grated Parmesan cheese", amount: "1/3 cup" },
      { item: "Italian seasoning & smoked paprika", amount: "1 tsp each" },
    ],
    instructions: [
      {
        step: 1,
        title: "Season & Brown Chicken",
        text: "Season chicken cutlets with paprika, Italian herbs, salt, and pepper. Sear in olive oil over medium-high heat for 5 minutes per side until golden and cooked through. Transfer to a plate.",
      },
      {
        step: 2,
        title: "Make Cream Sauce",
        text: "In the same skillet, sauté garlic and sun-dried tomatoes for 1 minute. Pour in chicken broth and cream, bringing to a gentle simmer for 3 minutes.",
      },
      {
        step: 3,
        title: "Wilt Spinach & Finish",
        text: "Stir in parmesan cheese and baby spinach until wilted. Return chicken and juices to the pan and spoon rich sauce over the chicken.",
      },
    ],
  },
  {
    id: "8",
    title: "Warm Cinnamon Berry Steel-Cut Oatmeal",
    description:
      "Hearty slow-cooked steel-cut oats simmered in almond milk, spiced with cinnamon and nutmeg, topped with warm stewed berries and roasted almonds.",
    cookTime: "20 min",
    prepTime: "5 min",
    servings: 2,
    calories: "290 kcal",
    difficulty: "Easy",
    mealType: "Breakfast",
    cuisine: "American",
    tags: ["Breakfast", "Vegan", "Heart Healthy", "Gluten Free"],
    featured: false,
    image:
      "https://images.unsplash.com/photo-1517673400267-0251440c45dc?auto=format&fit=crop&w=600&q=80",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    audioTip: {
      title: "Toasting Oats for Maximum Flavor",
      subtitle: "Chef Chloe - Nutty Aromas",
      duration: "1:40",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
    },
    ingredients: [
      { item: "Steel-cut or rolled oats", amount: "1 cup" },
      { item: "Unsweetened almond milk", amount: "2.5 cups" },
      { item: "Ground cinnamon", amount: "1 tsp" },
      { item: "Pure vanilla extract", amount: "1 tsp" },
      { item: "Mixed berries (fresh or frozen)", amount: "1 cup" },
      { item: "Pure maple syrup", amount: "2 tbsp" },
      { item: "Sliced toasted almonds & chia seeds", amount: "2 tbsp each" },
    ],
    instructions: [
      {
        step: 1,
        title: "Simmer Oats",
        text: "Bring almond milk to a gentle boil, stir in oats, cinnamon, vanilla, and a pinch of salt. Reduce heat and cook for 10-15 minutes until creamy.",
      },
      {
        step: 2,
        title: "Warm Berries",
        text: "In a small pot, warm mixed berries with 1 tbsp maple syrup for 3 minutes until bursting and syrupy.",
      },
      {
        step: 3,
        title: "Assemble & Serve",
        text: "Ladle hot oatmeal into bowls, top with warm berry compote, toasted almond slices, and a drizzle of maple syrup.",
      },
    ],
  },
  {
    id: "9",
    title: "Molten Chocolate Lava Cake",
    description:
      "Rich, dark chocolate cakes with a warm, gooey molten center, baked in individual ramekins and dusted with powdered sugar.",
    cookTime: "12 min",
    prepTime: "15 min",
    servings: 4,
    calories: "410 kcal",
    difficulty: "Hard",
    mealType: "Dessert",
    cuisine: "French",
    tags: ["Dessert", "Chocolate", "Comfort Food", "Vegetarian"],
    featured: true,
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    audioTip: {
      title: "Getting the Molten Center Right",
      subtitle: "Chef Elena - Timing is Everything",
      duration: "1:50",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    },
    ingredients: [
      { item: "Dark chocolate (70%, chopped)", amount: "200g" },
      { item: "Unsalted butter", amount: "1/2 cup" },
      { item: "Large eggs", amount: "2" },
      { item: "Egg yolks", amount: "2" },
      { item: "Granulated sugar", amount: "1/3 cup" },
      { item: "All-purpose flour", amount: "1/4 cup" },
      { item: "Pinch of salt", amount: "1/4 tsp" },
      { item: "Powdered sugar", amount: "for dusting" },
    ],
    instructions: [
      {
        step: 1,
        title: "Melt Chocolate & Butter",
        text: "Melt dark chocolate and butter together in a heatproof bowl over simmering water, stirring until smooth. Let cool slightly.",
      },
      {
        step: 2,
        title: "Whisk Eggs & Sugar",
        text: "In a separate bowl, whisk eggs, egg yolks, and sugar until pale and slightly thickened, about 2 minutes.",
      },
      {
        step: 3,
        title: "Combine & Fold",
        text: "Fold the melted chocolate into the egg mixture, then gently fold in flour and salt until just combined. Divide between 4 buttered ramekins.",
      },
      {
        step: 4,
        title: "Bake & Serve",
        text: "Bake at 425°F (220°C) for 11-12 minutes until the edges are set but the center jiggles slightly. Invert onto plates immediately, dust with powdered sugar, and serve warm.",
      },
    ],
  },
  {
    id: "10",
    title: "No-Bake Berry Cheesecake Cups",
    description:
      "Creamy no-bake cheesecake layered over a buttery graham crust in individual jars, topped with a fresh mixed berry compote.",
    cookTime: "0 min",
    prepTime: "20 min",
    servings: 4,
    calories: "380 kcal",
    difficulty: "Easy",
    mealType: "Dessert",
    cuisine: "American",
    tags: ["Dessert", "No-Bake", "Vegetarian", "Make Ahead"],
    featured: false,
    image:
      "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=600&q=80",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    audioTip: {
      title: "Whipping Cream Cheese Smooth",
      subtitle: "Chef Priya - No Lumps, No Problem",
      duration: "1:35",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    },
    ingredients: [
      { item: "Graham crackers (crushed)", amount: "1 cup" },
      { item: "Unsalted butter (melted)", amount: "3 tbsp" },
      { item: "Cream cheese (softened)", amount: "16 oz" },
      { item: "Powdered sugar", amount: "1/2 cup" },
      { item: "Heavy cream (whipped)", amount: "1 cup" },
      { item: "Vanilla extract", amount: "1 tsp" },
      { item: "Mixed berries (fresh)", amount: "1.5 cups" },
      { item: "Lemon juice", amount: "1 tbsp" },
    ],
    instructions: [
      {
        step: 1,
        title: "Make Crust",
        text: "Mix crushed graham crackers with melted butter. Press firmly into the base of 4 jars or glasses. Chill for 10 minutes.",
      },
      {
        step: 2,
        title: "Whip Filling",
        text: "Beat cream cheese, powdered sugar, and vanilla until smooth. Gently fold in whipped cream until light and fluffy.",
      },
      {
        step: 3,
        title: "Layer & Chill",
        text: "Spoon cheesecake filling over the crust in each jar. Chill for at least 2 hours, or overnight for best texture.",
      },
      {
        step: 4,
        title: "Top & Serve",
        text: "Toss berries with lemon juice and a touch of sugar. Spoon over the chilled cheesecake cups just before serving.",
      },
    ],
  },
  {
    id: "11",
    title: "Warm Apple Cinnamon Crumble",
    description:
      "Tender spiced apples baked under a buttery oat-and-brown-sugar crumble topping, best served warm with a scoop of vanilla ice cream.",
    cookTime: "40 min",
    prepTime: "15 min",
    servings: 6,
    calories: "350 kcal",
    difficulty: "Easy",
    mealType: "Dessert",
    cuisine: "American",
    tags: ["Dessert", "Comfort Food", "Vegetarian", "Fall Favorite"],
    featured: false,
    image:
      "https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?auto=format&fit=crop&w=600&q=80",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    audioTip: {
      title: "Choosing the Right Apples",
      subtitle: "Chef Daniel - Tart vs Sweet Varieties",
      duration: "1:25",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    },
    ingredients: [
      { item: "Baking apples (peeled, sliced)", amount: "6 medium" },
      { item: "Brown sugar", amount: "1/2 cup, divided" },
      { item: "Ground cinnamon", amount: "1.5 tsp" },
      { item: "Lemon juice", amount: "1 tbsp" },
      { item: "Rolled oats", amount: "1 cup" },
      { item: "All-purpose flour", amount: "1/2 cup" },
      { item: "Cold unsalted butter (cubed)", amount: "1/2 cup" },
      { item: "Pinch of salt", amount: "1/4 tsp" },
    ],
    instructions: [
      {
        step: 1,
        title: "Prep Apples",
        text: "Toss sliced apples with half the brown sugar, 1 tsp cinnamon, and lemon juice. Spread evenly in a baking dish.",
      },
      {
        step: 2,
        title: "Make Crumble",
        text: "Combine oats, flour, remaining brown sugar, cinnamon, and salt. Cut in cold butter with your fingers until the mixture resembles coarse crumbs.",
      },
      {
        step: 3,
        title: "Assemble",
        text: "Scatter the crumble topping evenly over the apples, pressing lightly so it holds together in clusters.",
      },
      {
        step: 4,
        title: "Bake & Serve",
        text: "Bake at 375°F (190°C) for 35-40 minutes until the topping is golden and the apples are bubbling. Let rest 10 minutes before serving warm.",
      },
    ],
  },
  {
    id: "12",
    title: "Roasted Red Pepper Hummus with Veggie Sticks",
    description:
      "Smoky roasted red pepper hummus, blended silky-smooth with tahini and garlic, served with a colorful spread of crisp vegetable sticks.",
    cookTime: "0 min",
    prepTime: "15 min",
    servings: 4,
    calories: "180 kcal",
    difficulty: "Easy",
    mealType: "Snacks",
    cuisine: "Mediterranean",
    tags: ["Snacks", "Vegan", "Gluten Free", "Meal Prep"],
    featured: true,
    image:
      "https://images.unsplash.com/photo-1637949385162-e416fb15b2ce?auto=format&fit=crop&w=600&q=80",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    audioTip: {
      title: "Silky Smooth Hummus Every Time",
      subtitle: "Chef Amina - The Ice Water Trick",
      duration: "1:15",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    },
    ingredients: [
      { item: "Canned chickpeas (rinsed & drained)", amount: "1 can (400g)" },
      { item: "Roasted red peppers (jarred)", amount: "1/2 cup" },
      { item: "Tahini paste", amount: "2 tbsp" },
      { item: "Garlic clove", amount: "1" },
      { item: "Lemon juice", amount: "2 tbsp" },
      { item: "Olive oil", amount: "2 tbsp" },
      { item: "Ice water", amount: "2-3 tbsp" },
      { item: "Carrot, cucumber & celery sticks", amount: "for serving" },
    ],
    instructions: [
      {
        step: 1,
        title: "Blend Base",
        text: "Add chickpeas, roasted red peppers, tahini, garlic, and lemon juice to a food processor. Blend until roughly combined.",
      },
      {
        step: 2,
        title: "Smooth It Out",
        text: "With the processor running, drizzle in olive oil, then ice water one tablespoon at a time until silky smooth.",
      },
      {
        step: 3,
        title: "Season & Chill",
        text: "Taste and adjust salt and lemon juice. Transfer to a bowl, cover, and chill for at least 20 minutes to let flavors meld.",
      },
      {
        step: 4,
        title: "Serve",
        text: "Drizzle with a little extra olive oil and serve alongside a colorful platter of fresh vegetable sticks.",
      },
    ],
  },
  {
    id: "13",
    title: "Crispy Baked Chickpea Snack Mix",
    description:
      "Oven-roasted chickpeas tossed in smoked paprika and garlic powder until irresistibly crunchy — a high-protein, better-for-you snack.",
    cookTime: "35 min",
    prepTime: "10 min",
    servings: 4,
    calories: "160 kcal",
    difficulty: "Easy",
    mealType: "Snacks",
    cuisine: "Mediterranean",
    tags: ["Snacks", "Vegan", "Gluten Free", "High Protein"],
    featured: false,
    image:
      "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?auto=format&fit=crop&w=600&q=80",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    audioTip: {
      title: "The Secret to Extra-Crunchy Chickpeas",
      subtitle: "Chef Ken - Dry Them Thoroughly First",
      duration: "1:10",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    },
    ingredients: [
      {
        item: "Canned chickpeas (rinsed, drained, patted dry)",
        amount: "2 cans (400g each)",
      },
      { item: "Olive oil", amount: "2 tbsp" },
      { item: "Smoked paprika", amount: "1 tsp" },
      { item: "Garlic powder", amount: "1 tsp" },
      { item: "Ground cumin", amount: "1/2 tsp" },
      { item: "Sea salt", amount: "1/2 tsp" },
    ],
    instructions: [
      {
        step: 1,
        title: "Dry the Chickpeas",
        text: "Spread chickpeas on a clean towel and pat thoroughly dry — removing excess moisture is the key to getting them crispy.",
      },
      {
        step: 2,
        title: "Season",
        text: "Toss chickpeas with olive oil, smoked paprika, garlic powder, cumin, and salt until evenly coated. Spread in a single layer on a baking sheet.",
      },
      {
        step: 3,
        title: "Roast",
        text: "Bake at 400°F (200°C) for 30-35 minutes, shaking the pan halfway through, until deeply golden and crunchy.",
      },
      {
        step: 4,
        title: "Cool & Store",
        text: "Let cool completely on the pan before serving — they crisp up further as they cool. Store in an airtight container for up to 3 days.",
      },
    ],
  },
  {
    id: "14",
    title: "Grilled Halloumi & Roasted Veg Wrap",
    description:
      "Charred halloumi and sweet roasted peppers and courgette wrapped in a warm flatbread with garlicky yogurt sauce and fresh herbs.",
    cookTime: "20 min",
    prepTime: "10 min",
    servings: 2,
    calories: "480 kcal",
    difficulty: "Easy",
    mealType: "Lunch",
    cuisine: "Mediterranean",
    tags: ["Lunch", "Vegetarian", "Mediterranean", "Quick & Easy"],
    featured: false,
    image:
      "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=600&q=80",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4",
    audioTip: {
      title: "Getting a Perfect Halloumi Char",
      subtitle: "Chef Nikos - Dry Pan, High Heat",
      duration: "1:20",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
    },
    ingredients: [
      { item: "Halloumi cheese (sliced)", amount: "200g" },
      { item: "Red bell pepper (sliced)", amount: "1" },
      { item: "Courgette (sliced)", amount: "1 medium" },
      { item: "Large flatbreads or wraps", amount: "2" },
      { item: "Greek yogurt", amount: "1/2 cup" },
      { item: "Garlic clove (minced)", amount: "1" },
      { item: "Fresh mint & parsley", amount: "handful, chopped" },
      { item: "Olive oil", amount: "2 tbsp" },
    ],
    instructions: [
      {
        step: 1,
        title: "Roast Vegetables",
        text: "Toss pepper and courgette with olive oil and salt. Roast at 425°F (220°C) for 15 minutes until tender and lightly charred.",
      },
      {
        step: 2,
        title: "Grill Halloumi",
        text: "Grill or pan-fry halloumi slices in a dry, hot pan for 2 minutes per side until golden and crisp.",
      },
      {
        step: 3,
        title: "Make Sauce",
        text: "Stir garlic and chopped herbs into Greek yogurt with a pinch of salt.",
      },
      {
        step: 4,
        title: "Assemble & Wrap",
        text: "Warm the flatbreads, spread with yogurt sauce, then layer with roasted vegetables and grilled halloumi. Roll tightly and slice in half.",
      },
    ],
  },
  {
    id: "15",
    title: "Thai Peanut Chicken Lettuce Wraps",
    description:
      "Savory ground chicken stir-fried with garlic, ginger, and a punchy peanut-lime sauce, spooned into crisp cool lettuce cups.",
    cookTime: "20 min",
    prepTime: "15 min",
    servings: 3,
    calories: "390 kcal",
    difficulty: "Medium",
    mealType: "Lunch",
    cuisine: "Thai",
    tags: ["Lunch", "High Protein", "Thai", "Gluten Free"],
    featured: true,
    image:
      "https://images.unsplash.com/photo-1778168199427-4e839943d20f?auto=format&fit=crop&w=600&q=80",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    audioTip: {
      title: "Balancing Sweet, Sour & Spicy",
      subtitle: "Chef Malee - The Thai Flavor Triangle",
      duration: "1:40",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
    },
    ingredients: [
      { item: "Ground chicken", amount: "1 lb (450g)" },
      { item: "Garlic cloves (minced)", amount: "3" },
      { item: "Fresh ginger (grated)", amount: "1 tbsp" },
      { item: "Peanut butter", amount: "3 tbsp" },
      { item: "Soy sauce", amount: "2 tbsp" },
      { item: "Lime juice", amount: "2 tbsp" },
      { item: "Butter lettuce leaves", amount: "1 head" },
      { item: "Shredded carrots & chopped peanuts", amount: "for garnish" },
    ],
    instructions: [
      {
        step: 1,
        title: "Cook Chicken",
        text: "Heat a splash of oil in a large skillet over medium-high heat. Cook ground chicken with garlic and ginger, breaking it up, until browned through.",
      },
      {
        step: 2,
        title: "Make Sauce",
        text: "Whisk peanut butter, soy sauce, and lime juice with 2 tbsp warm water until smooth and pourable.",
      },
      {
        step: 3,
        title: "Combine",
        text: "Pour the peanut sauce into the skillet with the chicken and toss to coat evenly. Simmer 2 minutes until glossy.",
      },
      {
        step: 4,
        title: "Assemble & Serve",
        text: "Spoon the chicken mixture into lettuce leaves, top with shredded carrots and chopped peanuts, and serve immediately.",
      },
    ],
  },
  {
    id: "16",
    title: "One-Pan Lemon Herb Roasted Chicken & Vegetables",
    description:
      "Golden roasted chicken thighs nestled among baby potatoes, carrots, and green beans, all infused with garlic, lemon, and rosemary.",
    cookTime: "45 min",
    prepTime: "15 min",
    servings: 4,
    calories: "560 kcal",
    difficulty: "Medium",
    mealType: "Dinner",
    cuisine: "American",
    tags: ["Dinner", "High Protein", "One-Pan", "Gluten Free"],
    featured: false,
    image:
      "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?auto=format&fit=crop&w=600&q=80",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    audioTip: {
      title: "Crispy Skin, Juicy Meat",
      subtitle: "Chef Lorenzo - The Dry-Brine Method",
      duration: "2:00",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
    },
    ingredients: [
      { item: "Bone-in, skin-on chicken thighs", amount: "6" },
      { item: "Baby potatoes (halved)", amount: "1 lb (450g)" },
      { item: "Carrots (chopped)", amount: "3 medium" },
      { item: "Green beans (trimmed)", amount: "1.5 cups" },
      { item: "Garlic cloves (whole)", amount: "6" },
      { item: "Lemon (sliced)", amount: "1" },
      { item: "Fresh rosemary & thyme", amount: "a few sprigs each" },
      { item: "Olive oil", amount: "3 tbsp" },
    ],
    instructions: [
      {
        step: 1,
        title: "Season Chicken",
        text: "Pat chicken thighs dry and season generously with salt, pepper, and olive oil. Let sit at room temperature for 15 minutes.",
      },
      {
        step: 2,
        title: "Arrange Pan",
        text: "Scatter potatoes, carrots, garlic, and lemon slices in a large roasting pan. Toss with olive oil, salt, and pepper.",
      },
      {
        step: 3,
        title: "Roast",
        text: "Nestle chicken thighs skin-side up among the vegetables, tuck in herb sprigs, and roast at 425°F (220°C) for 35 minutes.",
      },
      {
        step: 4,
        title: "Finish & Rest",
        text: "Add green beans to the pan and roast 10 more minutes until chicken skin is crisp and vegetables are tender. Rest 5 minutes before serving.",
      },
    ],
  },
  {
    id: "17",
    title: "Spicy Shrimp & Coconut Curry",
    description:
      "Plump shrimp simmered in a fragrant, spiced coconut curry sauce with bell peppers and fresh basil, served over steamed rice.",
    cookTime: "25 min",
    prepTime: "10 min",
    servings: 3,
    calories: "470 kcal",
    difficulty: "Medium",
    mealType: "Dinner",
    cuisine: "Thai",
    tags: ["Dinner", "Pescatarian", "Thai", "Spicy"],
    featured: true,
    image:
      "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=600&q=80",
    videoUrl:
      "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    audioTip: {
      title: "Don't Overcook the Shrimp",
      subtitle: "Chef Malee - The 3-Minute Curl Test",
      duration: "1:30",
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    },
    ingredients: [
      { item: "Large shrimp (peeled, deveined)", amount: "1 lb (450g)" },
      { item: "Red curry paste", amount: "2 tbsp" },
      { item: "Full-fat coconut milk", amount: "1 can (400ml)" },
      { item: "Red bell pepper (sliced)", amount: "1" },
      { item: "Fish sauce", amount: "1 tbsp" },
      { item: "Brown sugar", amount: "1 tsp" },
      { item: "Fresh basil leaves", amount: "handful" },
      { item: "Steamed jasmine rice", amount: "for serving" },
    ],
    instructions: [
      {
        step: 1,
        title: "Bloom the Curry Paste",
        text: "Heat a splash of oil in a large pan over medium heat. Fry the red curry paste for 1 minute until fragrant.",
      },
      {
        step: 2,
        title: "Build the Sauce",
        text: "Pour in coconut milk, fish sauce, and brown sugar, stirring to combine. Bring to a gentle simmer for 5 minutes.",
      },
      {
        step: 3,
        title: "Cook Shrimp & Peppers",
        text: "Add bell pepper and simmer 3 minutes, then add shrimp and cook 3-4 minutes until just pink and curled — don't overcook.",
      },
      {
        step: 4,
        title: "Finish & Serve",
        text: "Stir in fresh basil leaves off the heat. Serve immediately over steamed jasmine rice.",
      },
    ],
  },
];

export default RECIPES_DATA;
