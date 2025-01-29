# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

#

useEffect(() => {
const fetchCountries = async () => {
try {
const response = await fetch("https://restcountries.com/v3.1/all");
const data = await response.json();

        // Obtenir la langue actuelle du site
        const currentLang = i18n.language || "en";

        // Extraire les noms des pays selon la langue sélectionnée
        const countryNames = data.map((country) => {
          return (
            country.translations[currentLang]?.common || country.name.common
          );
        });

        setCountries(countryNames.sort());
      } catch (error) {
        console.error(t("receiveCountryErrorText"), error.message);
      }
    };

    fetchCountries();

}, [i18n.language]); // Exécuter l'effet quand la langue change
