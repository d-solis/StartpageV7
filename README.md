![icon](favicon-32x32.png?raw=true)
markup is [valid](https://validator.w3.org/nu/?doc=https%3A%2F%2Ftressley.github.io%2F_traichu%2Findex.html) and aims to adhere to HTML semantics. [Traditional Japanese](https://www.nipponcolors.com), [WCAG 2.0](https://www.w3.org/TR/WCAG20/) compliant colors make up the color palette. The monospace font is ol' [Fira Code](https://fonts.google.com/specimen/Fira+Code) loaded via [Google Fonts](https://fonts.google.com). Icons are bogstandard pngs (look look ill update this later ok), [DuckDuckGo's API](https://icons.duckduckgo.com/ip3/duckduckgo.com.ico) delivers the favicons, and [OpenWeather's API](https://openweathermap.org) provides the weather forecast and icons. Vanilla JavaScript and CSS handle all interactivity.

[Brave](https://search.brave.com/) is the default search engine because privacy is important 'round here.

⚠️ **You will need to generate your own OpenWeather API key!**
1. [Register for an OpenWeather account](https://home.openweathermap.org/users/sign_up) (OpenWeather will generate a default API key)
2. Sign in and navigate to Username > API keys and copy the key
3. Paste the key into [`line 1`](https://github.com/Tressley/_traichu/blob/3f2d695a4677f2a99c2c112fd11d01d71d6a05e9/js/main.js#L10) of `main.js`
4. Don't forget to allow location access to get your weather!

**Things changed/revamped for my needs**
1. Revamped `main.js` for better use when traveling, instead of having to manually put the city id of your city all you have to do is allow access to your location, this approach is way better when traveling
2. cleaned up some of the code
3. Adjusted dock and bookmarks
4. I also changed the search engine from duckduckgo to brave
