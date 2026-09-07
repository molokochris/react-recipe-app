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
    difficulty: "Medium",
    mealType: "Dinner",
    tags: ["Vegetarian", "Dinner", "Japanese", "Comfort Food"],
    featured: true,
    image:
      "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?auto=format&fit=crop&w=600&q=80",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
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
    tags: ["Gluten Free", "Breakfast", "Vegetarian", "Mediterranean"],
    featured: true,
    image:
      "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?auto=format&fit=crop&w=600&q=80",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
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
    tags: ["Pescatarian", "Dinner", "High Protein", "Gluten Free"],
    featured: true,
    image:
      "https://images.unsplash.com/photo-1727056353458-d985e6aa06b4?auto=format&fit=crop&w=600&q=80",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
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
    tags: ["Breakfast", "Vegetarian", "Quick & Easy", "Healthy"],
    featured: false,
    image:
      "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&w=600&q=80",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
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
    tags: ["Lunch", "Vegan", "Gluten Free", "Meal Prep"],
    featured: false,
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
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
    tags: ["Lunch", "Vegetarian", "Mediterranean", "Quick & Easy"],
    featured: false,
    image:
      "https://images.unsplash.com/photo-1568897798550-91c8caffe391?auto=format&fit=crop&w=600&q=80",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4",
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
    tags: ["Dinner", "High Protein", "Italian", "Comfort Food"],
    featured: false,
    image:
      "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?auto=format&fit=crop&w=600&q=80",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
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
    tags: ["Breakfast", "Vegan", "Heart Healthy", "Gluten Free"],
    featured: false,
    image:
      "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=600&q=80",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
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
];

export default RECIPES_DATA;
