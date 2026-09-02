# Static Signal — Personal Inquiry

This folder contains the editable source code for the GLD Global Leadership Diploma Personal Inquiry website.

## Run it locally

1. Install Node.js 20+ and pnpm.
2. Open a terminal in this folder.
3. Run `pnpm install`.
4. Run `pnpm dev`.
5. Open the local URL shown in the terminal, usually `http://localhost:3000`.

## Main files to edit

- `client/src/pages/Home.tsx` — page content, section titles, track names, influence text, and interactions.
- `client/src/index.css` — colors, typography, spacing, textures, and animations.
- `client/index.html` — page title and metadata.

## Adding your own content

In `Home.tsx`, replace the sample track titles and stories in the `tracks` array, the sample influence text in the `influences` array, and the process descriptions in `processEntries`.

The three process-audio buttons currently show a toast message as placeholders. To add real audio, place your audio files in a web-hosted location and replace the placeholder button with an HTML `<audio controls src="YOUR_AUDIO_URL" />` element.

The album-cover panel is currently a CSS placeholder. Replace it with your album artwork using an image URL or a hosted asset path appropriate for your deployment platform.

## Build check

Run `pnpm check` for TypeScript validation and `pnpm build` for a production build.

## Notes

The project is a Vite + React + TypeScript + Tailwind CSS static site. Private Manus project configuration and generated build/dependency folders are intentionally not included in the source ZIP.
