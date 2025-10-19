# Thunder Client collection — Blog API (CRUD)

This repo includes a Thunder Client collection export you can import to exercise the API routes implemented under `src/app/api/blog`.

Files:

- `.thunder/Blog-API-collection.json` — Thunder Client export (import into Thunder Client extension or similar tools like Postman)

Quick steps (Windows / PowerShell):

1. Install dependencies (if not already):

```powershell
npm install
```

2. Start the Next.js dev server:

```powershell
npm run dev
```

This starts the app at http://localhost:3000 by default.

3. Import the collection into Thunder Client (VS Code extension):
   - Open the Thunder Client pane in VS Code.
   - Click the import button and choose the file `.thunder/Blog-API-collection.json`.
   - The collection `Blog API - CRUD` will appear with 4 requests: GET All Posts, POST Create Post, PUT Update Post, DELETE Post.

4. Run the requests:
   - GET All Posts — retrieves the current posts array.
   - POST Create Post — sends a JSON body to create a new post. Example body is already set in the request.
   - For PUT/DELETE, set the environment variable `blogId` (default in collection is `1`) to the id of an existing post returned by GET.

Example JSON body for POST:

```json
{
  "title": "My New Post",
  "content": "This is the content for my new post."
}
```

Example JSON body for PUT (partial update):

```json
{
  "title": "Updated Title"
}
```

Notes:
- The API uses an in-memory array stored in `src/app/api/data.ts`. Data resets whenever the dev server restarts.
- If you prefer Postman, the Thunder Client export is compatible with many tools; you can also copy the request details manually.

If you want, I can add a small automated test script (node script) that runs through the CRUD flow using node-fetch. Would you like that?