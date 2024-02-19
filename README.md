# Aplikace pro Překrytí Jména Zastávky na Objekty od Pabla pro OMSI

Tato webová aplikace umožňuje uživatelům snadno přidávat vlastní názvy autobusových zastávek na objekty z webových stránek Pabla pro OMSI, konkrétně určeno pro sekci "ZASTÁVKOVÉ OBJEKTY". Nabízí intuitivní rozhraní pro zadávání názvů zastávek a informací o linkách, což umožňuje rychlou a snadnou úpravu textur zastávkových objektů pro použití v simulátoru OMSI 2.

## Funkce

- Uživatelsky přívětivé webové rozhraní pro zadávání názvů zastávek a informací o linkách.
- Dynamické přidání linek pro komplexní úpravy zastávky.
- Integrace vlastního písma pro splnění specifických regionálních estetických požadavků.
- Vykreslování založené na plátně zajišťuje vysokou kvalitu výstupních textur vhodných pro OMSI 2.

## Přístup k Aplikaci

Aplikace je hostována na GitHub Pages, což umožňuje okamžitý přístup bez potřeby stahování nebo nastavování lokálního serveru. Aplikaci můžete přímo přistupovat prostřednictvím následujícího URL:

[Aplikace pro Překrytí Jména Zastávky](https://vasgithubuzivatelskejmeno.github.io/prekryti-jmena-zastavky)

Stačí navštívit odkaz a začít s úpravami vašich textur zastávek.

## Použití Aplikace

1. Po přístupu k aplikaci zadejte hlavní text pro název zastávky a specifikujte počet linek, které chcete zahrnout.
2. Na základě zadaného počtu linek budou dynamicky generovány další vstupní pole. Zadejte detaily pro každou linku.
3. Klikněte na "Aktualizovat obrázek" pro náhled vaší upravené textury zastávky.
4. Klikněte pravým tlačítkem myši na plátno a vyberte "Uložit obrázek jako..." pro stažení vaší vlastní textury.

## Instalace Vlastních Textur v OMSI 2

Pro použití vašich vlastních textur v OMSI 2:

1. Přejděte do adresáře instalace OMSI 2, obvykle se nachází na `C:\Program Files (x86)\Steam\steamapps\common\OMSI 2`.
2. Pokračujte do `Sceneryobjects\<VaseSlozka>\textures`. Vytvořte novou složku pro vaše vlastní textury, pokud již nemáte. **Vyhněte se umístění textury v původní složce Pabla** aby nedošlo k přepsání stávající práce.
3. Zkopírujte staženou vlastní texturu do adresáře `textures`.

**Poznámka:** Doporučuje se vždy vytvořit zálohu původních textur před provedením jakýchkoli nahrazení. To zajišťuje, že můžete vrátit všechny změny, pokud jeto potřeba.

## Doporučení

Vždy si vytvořte zálohu původních textur před aplikací vlastních úprav. Tato aplikace usnadňuje vytváření nových textur bez přímého zásahu do herních souborů, nicméně je klíčové udržovat zálohy pro ochranu proti ztrátě dat nebo nechtěnému přepsání.

## Přispívání

Pokud máte zájem přispět do projektu hlášením chyb, navrhováním funkcí nebo vytvářením pull requestů, vaše vstupy pomáhají aplikaci vylepšovat pro všechny.

## Licence

Tento projekt je licencován pod licencí MIT - pro více informací viz soubor [LICENSE](LICENSE).

## Poděkování

- Speciální poděkování patří Pablovi za původní objekty OMSI.
- Tento projekt byl vyvinut s podporou OpenAI's ChatGPT, zahrnuje vlastní skripty pro efektivní manipulaci s obrázky.

---

# Bus Stop Name Overlay Application for Pablo's OMSI Objects

This web-based application allows users to easily overlay custom bus stop names on objects from Pablo's OMSI website, specifically designed for the "ZASTÁVKOVÉ OBJEKTY" section. It provides an intuitive interface for entering bus stop names and line information, enabling quick and easy customization of bus stop textures for use in the OMSI 2 simulator.

## Features

- User-friendly web interface for inputting bus stop names and line information.
- Dynamic addition of lines for comprehensive customization of bus stops.
- Custom font integration to meet specific regional aesthetic requirements.
- Canvas-based rendering ensures high-quality texture outputs suitable for OMSI 2.

## Accessing the Application

The application is hosted on GitHub Pages, allowing for immediate access without the need for downloading or local server setup. You can directly access the application through the following URL:

[Bus Stop Name Overlay Application](https://yourgithubusername.github.io/bus-stop-name-overlay)

Just visit the link to start customizing your bus stop textures.

## How to Use

1. Upon accessing the application, enter the main text for the bus stop name and specify the number of lines you want to include.
2. Additional input fields will be dynamically generated based on the number of lines specified. Fill in the details for each line accordingly.
3. Click "Update Image" to preview your customized bus stop texture.
4. Right-click on the canvas and select "Save image as..." to download your custom texture.

## Installing Custom Textures in OMSI 2

To use your custom textures in OMSI 2:

1. Navigate to your OMSI 2 installation directory, typically located at `C:\Program Files (x86)\Steam\steamapps\common\OMSI 2`.
2. Proceed to `Sceneryobjects\<YourFolder>\textures`. Create a new folder for your custom textures if not already done. **Avoid placing the texture in the original Pablo folder** to prevent overwriting any existing work.
3. Copy the downloaded custom texture into the `textures` directory.

**Note:** It's highly recommended to back up original textures before making any replacements. This ensures you can reverse any changes if needed.

## Recommendations

Always create a backup of the original textures prior to applying any customizations. While this application facilitates the creation of new textures without directly altering game files, maintaining backups is crucial to prevent data loss or accidental overwrites.

## Contributing

Feel free to contribute to the project by reporting bugs, suggesting features, or making pull requests. Your contributions help improve the application for everyone.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for more details.

## Acknowledgments

- Special thanks to Pablo for the original OMSI objects.
- This project was developed with the support of OpenAI's ChatGPT, incorporating custom scripts for efficient image manipulation.
