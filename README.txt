AZARIAH CHRISTIAN COLLEGE WEBSITE
MAINTAINABLE STATIC VERSION

1. PROJECT STRUCTURE
--------------------
index.html       Homepage
about.html       About the school
academics.html   Academics and school life
admissions.html  Admissions information
gallery.html     Photo gallery

assets/css/style.css
    All website styling. Rules and declarations are expanded and indented for readability. The stylesheet includes colours, layout, components and responsive rules.

assets/js/main.js
    Shared JavaScript interactions and homepage WhatsApp enquiry form. Functions and sections are formatted with readable indentation.

assets/images/
    Put school-approved photographs into the relevant named folders.

2. HOW TO ADD OR REPLACE PHOTOGRAPHS
------------------------------------
A. Copy your photo into the appropriate folder under assets/images/.
B. Use a simple filename without spaces, for example:
       campus-main.jpg
       students-in-class.jpg
       school-sports-day.jpg
C. Open the relevant HTML page and find the image section.
D. Update the image path to the filename you added.

Example:
    <img src="assets/images/campus/campus-main.jpg"
         alt="Azariah Christian College campus">

Keep the image path relative to the project root. Do not move the HTML pages
into another folder unless you also update their asset paths.

3. HOW TO EDIT TEXT
-------------------
Open the relevant page:
- Homepage text: index.html
- School background: about.html
- Subjects and activities: academics.html
- Admissions: admissions.html
- Gallery captions and images: gallery.html

HTML is indented and grouped into sections. Search for the section heading
you want to change, then edit the text between its tags.

4. HOW TO CHANGE COLOURS AND DESIGN
-----------------------------------
Open assets/css/style.css.
Look near the top for the CSS variables (colour values). Update the variables
there first rather than changing colours throughout the file.

5. WHATSAPP ENQUIRY FORM
-----------------------
The homepage enquiry form opens WhatsApp to:
    +263 78 217 0226

The visitor's details are added to a prepared message. The visitor must press
Send inside WhatsApp. The form does not silently send messages or store data
on the website.

To change the WhatsApp number, open assets/js/main.js and update:
    const schoolWhatsAppNumber = "263782170226";

Use international format without +, spaces or hyphens.

6. BOOTSTRAP
------------
Bootstrap is retained for the responsive grid, navigation and buttons.
Bootstrap does not require HTML to be written on one line. The HTML in this
project is formatted and indented for people to read and maintain.

7. PREVIEW LOCALLY
------------------
Open index.html in Chrome or Edge. An internet connection is required for
Bootstrap and Google Fonts loaded from their CDNs.

8. UPLOAD TO VERTICO SHARED HOSTING
-----------------------------------
1. Extract this ZIP.
2. Open cPanel > File Manager > public_html (or the correct document root).
3. Upload the CONTENTS of this folder.
4. Ensure index.html is directly inside public_html.
5. Test every page, image, navigation link and WhatsApp button.

9. BEFORE GOING LIVE
-------------------
- Review the supplied school photographs and their section placement.
- The official crest is already used in the navigation bar.
- Confirm phone numbers, email, address and admissions information.
- Add the official entrance examination/application URL when supplied.
- Test the website on desktop and mobile.

This is a static website. It does not include a CMS, database, student portal,
or online examination system.

10. SUPPLIED SCHOOL PHOTOGRAPHS
-------------------------------
The supplied photographs have been placed in the sections that best match
their content. The gallery includes student life, science practicals,
outdoor activities, sports, campus life and school events.

All image copies are in assets/images/. See assets/images/IMAGE-GUIDE.txt
for the folder map and replacement instructions. The original uploaded
photographs are not modified; these are high-quality WebP website copies.


LATEST WEBSITE UPDATE
- Homepage hero now uses the supplied student corridor photograph, encoded as high-quality WebP (quality 94) to reduce page weight while retaining detail.
- Added a homepage Sports & Enrichment section: Chess, Debate, French, Volleyball, Handball, Soccer, Netball and more.
- Added a Student Portal button to the navigation on every page. IMPORTANT: the button is present, but its destination is intentionally left as a placeholder because the school's actual portal URL has not yet been supplied. Add the correct URL to the Student Portal link on each page before publishing.
- No faces have been generated or altered for the sports section; it uses text-only activity tiles.
