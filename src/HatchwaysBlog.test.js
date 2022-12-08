import { render, screen, within } from "@testing-library/react";

import HatchwaysBlog from "./HatchwaysBlog";
import blogs from "./data/blogs.json";
import userEvent from "@testing-library/user-event";

// ---------------------------------------------------------------- //
//                                                                  //
//                 PLEASE DO NOT MODIFY THIS FILE.                  //
//               Hatchways automation depends on it.                //
//                                                                  //
// ---------------------------------------------------------------- //

test("Prev button should exist", async () => {
  render(<HatchwaysBlog />);
  const previousButton = screen.getByRole("button", {
    name: "Goto previous page",
  });

  expect(previousButton).toBeInTheDocument();
});

test("Next button should exist", async () => {
  render(<HatchwaysBlog />);
  const nextButton = screen.getByRole("button", {
    name: "Goto next page",
  });

  expect(nextButton).toBeInTheDocument();
});

test("First 15 posts should be rendered by default", async () => {
  render(<HatchwaysBlog />);
  const blogList = screen.getByRole("list", { name: "blog list" });
  const blogItems = within(blogList).getAllByRole("listitem");

  expect(blogItems).toHaveLength(15);

  for (let i = 0; i < 15; i++) {
    const blogItem = blogItems[i];
    const post = blogs.posts[i];

    const title = within(blogItem).getByText(post.title);
    expect(title).toBeInTheDocument();
    const author = within(blogItem).getByText(post.author);
    expect(author).toBeInTheDocument();
    const excerpt = within(blogItem).getByText(post.excerpt);
    expect(excerpt).toBeInTheDocument();
  }
});

test("Changing page size from 15 to 25 should render 25 posts", async () => {
  const user = userEvent.setup();
  render(<HatchwaysBlog />);
  const pageSizeMenu = screen.getByRole("combobox", {
    name: "Select page size",
  });

  await user.selectOptions(pageSizeMenu, "25");

  const blogList = screen.getByRole("list", { name: "blog list" });
  const blogItems = within(blogList).getAllByRole("listitem");

  expect(blogItems).toHaveLength(25);

  for (let i = 0; i < 25; i++) {
    const blogItem = blogItems[i];
    const post = blogs.posts[i];

    const title = within(blogItem).getByText(post.title);
    expect(title).toBeInTheDocument();
    const author = within(blogItem).getByText(post.author);
    expect(author).toBeInTheDocument();
    const excerpt = within(blogItem).getByText(post.excerpt);
    expect(excerpt).toBeInTheDocument();
  }
});

test("Page 1 is initially selected", async () => {
  render(<HatchwaysBlog />);
  const currentPage = screen.getByRole("listitem", {
    current: "page",
  });

  expect(currentPage).toHaveTextContent("1");
});

test("Page 1 is not selected when page 2 is selected", async () => {
  const user = userEvent.setup();
  render(<HatchwaysBlog />);
  const pageTwoButton = screen.getByText("2", { selector: "button" });

  await user.click(pageTwoButton);

  const pageTwo = screen.getByText("2", { selector: "button" }).closest("li");
  expect(pageTwo).toHaveAttribute("aria-current", "page");
  const pageOne = screen.getByText("1", { selector: "button" }).closest("li");
  expect(pageOne).toHaveAttribute("aria-current", "false");
});

test("Prev button should be disabled when page 1 is selected", async () => {
  const user = userEvent.setup();
  render(<HatchwaysBlog />);
  const pageOneButton = screen.getByText("1", { selector: "button" });
  await user.click(pageOneButton);

  const previousButton = screen.getByRole("button", {
    name: "Goto previous page",
  });

  expect(previousButton).toBeDisabled();
});

test("All pagination buttons should exist by default", async () => {
  render(<HatchwaysBlog />);

  const paginationList = screen.getByRole("list", {
    name: "Blog post pagination list",
  });

  const paginationItems = within(paginationList).getAllByRole("listitem");
  expect(paginationItems).toHaveLength(7);
  expect(paginationItems.map((item) => item.textContent)).toStrictEqual([
    "",
    "1",
    "2",
    "3",
    "…",
    "44",
    "",
  ]);

  const previousButton = screen.getByRole("button", {
    name: "Goto previous page",
  });
  expect(paginationItems[0]).toContainElement(previousButton);
  const nextButton = screen.getByRole("button", {
    name: "Goto next page",
  });
  expect(paginationItems[6]).toContainElement(nextButton);
});
