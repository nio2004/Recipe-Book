import React, { useState } from 'react'
import r1image from '../assets/buffalo-cauliflower-recipe.jpg'
import r2image from '../assets/vegan-spaghetti-carbonara-sq-1.jpg'
import r3image from '../assets/mangoavacadosalad.jpeg'
import r4image from '../assets/veganlentil.jpg'
import r5image from '../assets/Vegetarian-Pad-Thai-Recipe.jpg'
import r6image from '../assets/choccake.jpg'
import r7image from '../assets/vegan-medit-lentil-soup-1244-24a3c52cba884b00867fd834988c52b0.jpg'
import { IoStarSharp } from "react-icons/io5";
import { Link } from 'react-router-dom'

const Recipe = () => {
    const categories =["All Types","Appetizers","Main Courses","Salad & Sides","Vegeterians Delights","International Flavours","Desserts & Sweets","Quick & Easy Supper"]
    
    const [activeCategory, setActiveCategory] = useState(0);

    const handleCategoryClick = (index) => {
      setActiveCategory(index);
    };
    
    const CategoryCard = ({ text, onClick, isActive }) => {
        return (
          <div
            className={`rounded-lg p-1 cursor-pointer ${isActive ? 'bg-darkred text-white' : 'bg-white/70'}`}
            onClick={onClick}
          >
            {text}
          </div>
        );
      };
      
    const recipelist = [
        
        {
            id:1,
            recipename: "Buffalo Cauliflower Wings",
            recipeimage: r1image,
            recipesteps: `Preheat the oven to 450°F and line two large baking sheets with parchment paper.
            In a large bowl, whisk together the flour, cornstarch, garlic powder, onion powder, paprika, and salt. Add the water and whisk until smooth. Add the cauliflower and stir to coat.
            Lift the cauliflower florets out of the batter, allowing any excess batter to drip back into the bowl. Arrange in a single layer on the prepared baking sheets and bake for 10 minutes. Use a spatula to carefully flip the florets. Bake for another 10 minutes, swapping the pans on the oven racks.
            Remove the cauliflower from the oven and brush with some of the buffalo sauce. Bake for another 12 to 15 minutes, or until the cauliflower is dark and crisp around the edges.
            Remove from the oven and brush with additional buffalo sauce. If desired, serve with vegan ranch for dipping.`,
            reciperequirements: `Ingredients
            ⅔ cup all-purpose flour, spooned and leveled
            ¼ cup cornstarch
            1 teaspoon garlic powder
            1 teaspoon onion powder
            1 teaspoon paprika
            ½ teaspoon sea salt
            ¾ cup water
            1 head cauliflower, about 2 pounds, broken into large florets
            Buffalo Sauce, for brushing
            Vegan Ranch, for dipping, optional`,
            rating:4.7,
            category: "Appetizers",
        },
        {
            id:2,
            recipename: "Vegan Spaghetti Carbonara",
            recipeimage: r2image,
            recipesteps: `Cook the spaghetti according to the package instructions until al dente. In a blender, blend the tofu, nutritional yeast, garlic, lemon juice, salt, pepper, and water until smooth. In a large skillet, heat the olive oil over medium heat. Add the diced onion and cook until softened, about 5 minutes. Add the minced garlic and cook for another 1-2 minutes. Add the blended tofu mixture to the skillet and cook for 3-4 minutes, stirring constantly. Add the cooked spaghetti to the skillet and toss to coat. Serve hot, garnished with chopped parsley and vegan parmesan cheese, if desired.`,
            reciperequirements: `Ingredients:
                12 ounces (340g) spaghetti
                1 (14-ounce / 400g) package extra-firm tofu, drained
                1/4 cup (15g) nutritional yeast
                2 cloves garlic, minced
                2 tablespoons lemon juice
                1/2 teaspoon salt
                1/4 teaspoon black pepper
                1/4 cup (60ml) water
                1 tablespoon olive oil
                1 small onion, diced
                Chopped parsley and vegan parmesan cheese for garnish (optional)`,
            rating: 4.8,
            category: "Main Courses",
        },
        {
            id:3,
            recipename: "Mango Avocado Salad",
            recipeimage: r3image,
            recipesteps: `In a large salad bowl, combine the mixed greens, sliced mango, sliced avocado, red onion, and cherry tomatoes. In a small bowl, whisk together the lime juice, olive oil, honey, salt, and pepper. Pour the dressing over the salad and toss gently to coat. Serve immediately, garnished with chopped cilantro if desired.`,
            reciperequirements: `Ingredients:
                6 cups mixed greens
                1 ripe mango, peeled, pitted, and sliced
                1 ripe avocado, peeled, pitted, and sliced
                1/4 cup thinly sliced red onion
                1 cup cherry tomatoes, halved
                2 tablespoons fresh lime juice
                2 tablespoons olive oil
                1 tablespoon honey
                Salt and pepper to taste
                Chopped cilantro for garnish (optional)`,
            rating: 4.6,
            category: "Salad & Sides",
        },
        {
            id:4,
            recipename: "Vegan Lentil Shepherd's Pie",
            recipeimage: r4image,
            recipesteps: `Preheat the oven to 375°F (190°C). In a large pot, heat the olive oil over medium heat. Add the onion, carrots, and celery and cook until softened, about 5 minutes. Add the garlic, thyme, rosemary, and tomato paste and cook for another 2 minutes. Add the lentils, vegetable broth, Worcestershire sauce, and soy sauce. Bring to a boil, then reduce the heat and simmer for 25-30 minutes, or until the lentils are tender. In a separate pot, cook the potatoes in boiling water until tender, about 15 minutes. Drain and mash with the vegan butter, non-dairy milk, salt, and pepper. Spoon the lentil mixture into a 9x13-inch (23x33cm) baking dish. Spread the mashed potatoes evenly over the lentil mixture. Bake for 25-30 minutes, or until the potatoes are golden brown. Serve hot.`,
            reciperequirements: `Ingredients:
                For the lentil filling:
                1 tablespoon olive oil
                1 onion, diced
                2 carrots, diced
                2 stalks celery, diced
                3 cloves garlic, minced
                1 teaspoon dried thyme
                1 teaspoon dried rosemary
                2 tablespoons tomato paste
                1 1/2 cups brown or green lentils, rinsed and drained
                4 cups vegetable broth
                2 tablespoons vegan Worcestershire sauce
                1 tablespoon soy sauce
                Salt and pepper to taste
                For the mashed potatoes:
                2 1/2 pounds (1.1kg) russet potatoes, peeled and chopped
                1/4 cup (56g) vegan butter
                1/2 cup (120ml) non-dairy milk
                Salt and pepper to taste`,
            rating: 4.9,
            category: "Vegeterians Delights",
        },
        {
            id:5,
            recipename: "Vegan Pad Thai",
            recipeimage: r5image,
            recipesteps: `Soak the rice noodles in hot water for 15-20 minutes, or until softened. Drain and set aside. In a small bowl, whisk together the tamarind paste, soy sauce, maple syrup, and sriracha. Set aside. In a large skillet or wok, heat the sesame oil over medium heat. Add the tofu and cook until browned on all sides, about 5-7 minutes. Remove the tofu from the skillet and set aside. In the same skillet, add the garlic and shallots and cook for 1-2 minutes, or until fragrant. Add the bell pepper, carrot, and broccoli and cook for another 3-4 minutes, or until slightly softened. Add the soaked rice noodles and the sauce to the skillet. Toss everything together until well coated. Cook for another 2-3 minutes, or until the noodles are heated through. Serve hot, garnished with chopped peanuts, cilantro, and lime wedges.`,
            reciperequirements: `Ingredients:
                8 ounces (225g) rice noodles
                3 tablespoons tamarind paste
                2 tablespoons soy sauce
                2 tablespoons maple syrup
                1 tablespoon sriracha
                2 tablespoons sesame oil
                8 ounces (225g) extra-firm tofu, pressed and cubed
                3 cloves garlic, minced
                2 shallots, thinly sliced
                1 bell pepper, thinly sliced
                1 carrot, julienned
                1 cup broccoli florets
                Chopped peanuts, cilantro, and lime wedges for garnish`,
            rating: 4.7,
            category: "International Flavours",
        },
        {
            id:6,
            recipename: "Vegan Chocolate Cake",
            recipeimage: r6image,
            recipesteps: `Preheat the oven to 350°F (175°C). Grease and flour two 9-inch (23cm) round cake pans. In a large bowl, whisk together the flour, cocoa powder, baking soda, baking powder, and salt. In another bowl, whisk together the sugar, vegetable oil, applesauce, vinegar, and vanilla extract. Gradually add the wet ingredients to the dry ingredients, mixing until smooth. Divide the batter evenly between the prepared cake pans. Bake for 25-30 minutes, or until a toothpick inserted into the center of the cakes comes out clean. Let the cakes cool in the pans for 10 minutes, then transfer them to a wire rack to cool completely. Once cooled, frost the cakes with vegan chocolate frosting and serve.`,
            reciperequirements: `Ingredients:
                2 cups (250g) all-purpose flour
                3/4 cup (75g) cocoa powder
                1 1/2 teaspoons baking soda
                1 1/2 teaspoons baking powder
                1/2 teaspoon salt
                1 1/2 cups (300g) granulated sugar
                1/2 cup (120ml) vegetable oil
                1 cup (240ml) unsweetened applesauce
                2 tablespoons white vinegar
                2 teaspoons vanilla extract
                Vegan chocolate frosting`,
            rating: 4.9,
            category: "Desserts & Sweets",
        },
        {
            id:7,
            recipename: "Vegan Lentil Soup",
            recipeimage: r7image,
            recipesteps: `In a large pot, heat the olive oil over medium heat. Add the onion, carrots, and celery and cook until softened, about 5 minutes. Add the garlic, thyme, and rosemary and cook for another 2 minutes. Add the lentils, diced tomatoes, vegetable broth, and bay leaves. Bring to a boil, then reduce the heat and simmer for 25-30 minutes, or until the lentils are tender. Season with salt and pepper to taste. Remove the bay leaves before serving. Serve hot, garnished with chopped parsley if desired.`,
            reciperequirements: `Ingredients:
                1 tablespoon olive oil
                1 onion, diced
                2 carrots, diced
                2 stalks celery, diced
                3 cloves garlic, minced
                1 teaspoon dried thyme
                1 teaspoon dried rosemary
                1 cup brown or green lentils, rinsed and drained
                1 (14-ounce / 400g) can diced tomatoes
                6 cups vegetable broth
                2 bay leaves
                Salt and pepper to taste
                Chopped parsley for garnish (optional)`,
            rating: 4.5,
            category: "Quick & Easy Supper",
        },
    ]

    const RecipeCard = ({ recipe }) => {
        return (

        <Link to={`/recipes/${recipe.id}`} className='bg-white/80 w-fit min-w-[15vw] relative rounded-lg'>
            <img src={recipe.recipeimage} alt={recipe.recipename} className='w-full h-[250px] rounded-lg mb-4' />
            {/* Rating div */}
            <div className="absolute w-fit h-fit bottom-14 left-1 bg-white/70 text-white rounded-lg">
                {/* <span className="text-black">Rating:</span> */}
                <div className='flex align-center'>
                    <span className="ml-1 text-black">{recipe.rating}</span> {/* Assuming `rating` is a property of the recipe object */}
                    <IoStarSharp className='ml-1 text-yellow-400 text-xl'/>
                </div>
            </div>
            {/* Recipe name */}
            <h2 className='text-xl font-semibold mb-2 mx-auto w-fit'>{recipe.recipename}</h2>
        </Link>
        );
    }

    // const [activeCategory, setActiveCategory] = useState(null);

    // const handleCategoryClick = (index) => {
    //     setActiveCategory(index);
    // };

    const filteredRecipes = activeCategory !== null && categories[activeCategory] !== "All Types"
    ? recipelist.filter(recipe => recipe.category === categories[activeCategory])
    : recipelist;


    return (
    <div className='mx-auto mt-28 w-fit min-w-[40vw]'>
        <div className='text-4xl font-semibold relative w-fit mx-auto m-3'>What to <span className='text-darkred mx-1'>Cook</span>?</div>
        <div className='flex flex-wrap gap-5 mx-auto max-w-[70vw] justify-center'>
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            text={category}
            onClick={() => handleCategoryClick(index)}
            isActive={activeCategory === index}
          />
        ))}
        </div>
        <div className='flex flex-wrap gap-5 bg-white/70 w-fit mx-auto max-w-[70vw] justify-center p-8 mt-24'>
        {/* <div className='grid grid-cols-* md:grid-cols-4 gap-4'>         */}
                {filteredRecipes.map((recipe, index) => (
                    <RecipeCard key={index} recipe={recipe} />
                ))}
        </div>
        
    </div>
  )
}

export default Recipe