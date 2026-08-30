# Law Firm Website — Preview Build

Static preview homepage for a personal injury law firm, modelled on the layout/structure of the [Avvocato (VamTam) "Small Law Firm" theme](https://avvocato.vamtam.com/home-small-law-firm/), localised for **North Sydney, NSW**.

**This is a placeholder build:**
- Business name is a placeholder: **Smith & Associates**
- Phone number, address, verdict figures, testimonials and blog posts are all placeholder content
- "New York" has been swapped for "North Sydney" throughout, with legal detail adjusted to reference NSW law generally (not verified — confirm limitation periods etc. with the client's actual solicitor before going live)

## Structure

- `index.html` — single homepage
- `assets/css/style.css` — all styling
- `assets/js/script.js` — small interaction script (case-evaluation widget)
- `assets/images/` — drop the North Sydney skyline graphic (or any other imagery) here; a placeholder inline SVG skyline is used in the hero and footer until then

## Running locally

```bash
python -m http.server 8133
```

Then open http://localhost:8133
