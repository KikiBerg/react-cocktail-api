# React Cocktail API

Link to live website: [CLICK HERE!](https://react-cocktail-api.vercel.app/)

![Am I Responsive Image](src\assets\cocktail-api-mockup.png)

## Project Overview

This project is a cocktail recipe web application built with React and TypeScript. It fetches cocktail data from the [Cocktail DB API](https://www.thecocktaildb.com/api.php) and presents it in a dynamic user interface. The app allows users to explore various cocktail recipes, search by ingredients or names, and view detailed information about each drink.

The web application consists of several pages:
- **Landing Page**: A random cocktail is displayed.
- **Search Page**: Users can search for cocktails using names or ingredients.
- **Cocktail Info Page**: Displays detailed information about a selected cocktail.

## Features

1. **Search for Cocktails by Name or Ingredient**  
   Users can search for cocktails using either the name of the cocktail or a list of ingredients. This allows users to either look for a specific drink they have in mind or find a drink based on the ingredients they already have. For example, a user could search for all cocktails containing "vodka" or search for a specific cocktail like "Margarita." The search results are presented in a list format, showing a brief overview of each cocktail found.

2. **Random Cocktail Generator**  
   On the landing page, users are greeted with a randomly selected cocktail, allowing them to discover new drinks without searching. This feature refreshes and shows a new cocktail every time the user visits the page or clicks a button for a new suggestion. Each random cocktail comes with its image, name, and a link to detailed information.

3. **Detailed Cocktail Information**  
   When a user selects a specific cocktail from the search results or the random cocktail generator, they are taken to the "Cocktail Info Page," which shows comprehensive details about the drink. This includes the name of the drink, its category (e.g., cocktail, shot), the glass type (e.g., martini glass, highball glass), ingredients, measurements for each ingredient, and preparation instructions. The cocktail’s image is also displayed prominently.


## Requirements

- React with TypeScript.
- Vite as the build tool.
- Use of CSS frameworks is allowed but not required.

## Pages and Components


1. **Landing Page (Random Cocktail Page)**  
   The landing page serves as the introduction to the app. Every time the page is loaded, a random cocktail is fetched from the API and displayed. This page has a clean design with the cocktail’s image, name, and a "more details" button that leads to the Cocktail Info Page. If the user wishes, they can click a button to generate a new random cocktail, giving them an opportunity to discover different drinks in an interactive way.

2. **Search Page**  
   The search page allows users to search for cocktails by entering a name or ingredient. This page features a search bar that dynamically fetches and filters results based on user input. Once a search is performed, the results are displayed as a list of cocktails, each showing the cocktail's name, a thumbnail image, and a short description. Clicking on any cocktail in the list will navigate the user to the detailed Cocktail Info Page.

3. **Cocktail Info Page**  
   The Cocktail Info Page is a more detailed view of a single cocktail. This page provides:
   - **Drink Name**: The name of the selected cocktail.
   - **Category**: The type of drink, such as "cocktail" or "shot."
   - **Glass Type**: Information on the type of glass used to serve the drink.
   - **Ingredients and Measurements**: A list of ingredients required for the drink, along with the exact measurements needed to prepare it.
   - **Instructions**: Step-by-step preparation instructions to make the cocktail.
   - **Tags and Additional Info**: Sometimes, the page may also display tags like "alcoholic" or "non-alcoholic" or any other special info.
   The page is user-friendly, with a prominent image of the drink, making it easy for users to follow the recipe.

4. **Header and Navigation Component**  
   The header component contains the app's navigation, allowing users to easily switch between the landing page, search page, and favorites page. It also includes the app's logo or title, creating a consistent layout for all pages.

5. **Cocktail Card Component**  
   Each cocktail in the search results or favorites is displayed in a consistent card format. The card shows a thumbnail of the cocktail, its name, and a short description. Clicking on the card takes the user to the Cocktail Info Page. This component makes it easy to browse through multiple cocktails in an organized and visually appealing way.

6. **Footer Component**  
   The footer provides additional navigation links and possibly some branding or credits. It ensures that users can access important links no matter where they are on the site.

## Instructions

To get started, clone the repository and run the following commands:

```bash
npm install
npm run dev
```

---

