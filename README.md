# Hatchways Frontend Work Simulation

## General Instructions

For this project, you are provided a starting codebase for a React front end and are to build on this starting code by adding new features. The starting code is for the application described in the section below, and you can find your assigned work on the Issues tab of this repository.

Please open a **single pull request** with all of the changes needed to implement the features described in the issue, then return to the Hatchways dashboard to mark your assessment as completed.

We will use [this rubric](https://drive.google.com/file/d/1Lfn6JnanBhuSjMDQaIdIBk1_QK7i9mNU/view) to evaluate your submission. Please note that if your submission does not attempt to complete all of the requirements, or does not pass our plagiarism screening, we will be unable to provide feedback on it. Please contact hello@hatchways.io if you have any questions or concerns.

---

# Introduction to this Application

You will be designing front-end components in React for a simple blogging website. The feature set you will be responsible for is creating a pagination component for the blog posts (`src/data/blogs.json`).

A blog post has the following structure:

```json
{
  "id": 1,
  "author": "Esmeralda Vanne",
  "title": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
  "excerpt": "Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  "date": "1634439025000",
  "image": "http://dummyimage.com/200x134.png/cc0000/ffffff",
  "readingTimeMinutes": 9,
  "tags": ["crypto", "health"]
}
```

---

### Setup

```
yarn install
```

### Format Code

```
yarn prettier --write .
```

### Development

```
yarn start
```

### Testing

```
yarn test
```
