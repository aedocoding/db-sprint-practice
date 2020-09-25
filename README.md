# Sprint Practice: Node DB Sprint

## Description

In this challenge, you design and build a Data Model and a RESTful API that stores data into a Relational Database.

## Minimum Viable Product

Take the steps necessary to complete the project from scratch. Start by initializing your project with a `package.json` and go from there.

Complete the following tasks:

  - [ ] Design the data model and use _knex migrations_ to create the database and tables needed to satisfy the following business rules:
  - [ ] a `show` can have multiple `characters`.
  - [ ] a `character` belongs to only one `show`.
  - [ ] a `show` can use multiple `genres`. Example of `genres` are: comedy, cartoon, drama,  action, sit-com, live-action, etc.
  - [ ] the same `genre` can be used in multiple `shows`.
  - [ ] when adding a `show` the client must provide a name, the description is optional.
  - [ ] when adding a `genre` the client must provide a name.
  - [ ] when adding a `character` the client must provide a description, actor/actress is optional.
  - [ ] when adding a `character` the client must provide the `id` of an existing show.
  - [ ] for `shows`, if no value is provided for the `watched` property, the API should provide a default value of `false`.
  
  - [ ] Build an API with endpoints for:
  - [ ] adding genres.
  - [ ] retrieving a list of genres.
  - [ ] adding shows.
  - [ ] retrieving a list of shows.
  - [ ] adding characters.
  - [ ] retrieving a list of characters. **The list of characters should include the show name and show description**.

### Entities

We want to store the following data about a `show`:

- [ ] a unique ID.
- [ ] a name. This column is required.
- [ ] a description.
- [ ] a boolean that indicates if the show has been watched. This column cannot be NULL, the default value should be `false`.

A `genre` is an identifier to categorize a show, some examples are: comedy, cartoon, drama,  action, sit-com, etc. We want to store the following data about a `genre`:

- [ ] a unique ID.
- [ ] a name. This column is required.

The database should not allow genres with duplicate names.

A `character` is an entity that exists inside of a show. We want to store the following data about a 'character`.

- [ ] a unique ID.
- [ ] a description of the character. This column is required.
- [ ] a column listing the character's actor or actress.

## Stretch Problem

This section is **optional** and not counted towards MVP. Start working on it after you're done with the main assignment.

Add an endpoint for retrieving a `show` by its `id` that returns an object with the following structure:

```js
{
  id: 1,
  name: 'show name here',
  description: 'the show's description',
  watched: false, // or true, the database will return 1 for true and 0 for false, extra code is required to convert a 1 to true and a 0 to false.
  characters: [
    {
      id: 1,
      description: 'description',
      actor/actress: 'the actor or actress',
    },
    {
      id: 7,
      description: 'another description',
      actor/actress: 'the actor or actress',
    }
  ],
  genres: [
    {
      id: 1,
      name: 'name of a genre',
    },
    {
      id: 2,
      name: 'another genre name'
    }
  ]
}
```

Add the remaining CRUD operations for shows and characters.

Use `knex` to add _data seeding_ scripts for shows and character.
