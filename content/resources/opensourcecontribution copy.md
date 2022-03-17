---
title: Open Source Contribution Guide
icon: /icons/prototyping-tools.svg
desc: How to contribute to Open Source!
link: opensourcecontribution
tags:
  - open-source
---

# Open-source Contribution Guideline

# Introduction to Open-source

## What is open-source?

Open-source projects are projects where the code is freely available, to which
you can access and contribute to them via a code hosting platform (like GitHub).

## How does open-source work?

Open-source projects can be maintained by a single person or a team. We will
call these people maintainers. Maintainers are the people who oversee the whole
project, handle product development, and communicate with contributors (like
you!).

As contributors, you can tackle project issues (which can be bugs, features,
documentation, design, etc.), or create issues to improve the project!

Open-source is a great step to be involved in a large project, where you can
learn new technologies, sharpen your coding skills, or expand your network!

# How to Contribute to an Open Source Repository

**Rules of Thumb**: Always try to use search engines for solutions first. If
that does not help you solve your problems, then reach out to the
moderators/maintainers of the project with what you tried, and they will
definitely help you out!

## Step 1: Choose a project

Choosing the right project to start and contribute to is important, as it will
shape your experience and opportunities. There are some criteria that you may
need to consider:

- Does the project itself (its meaning, functionality, area, etc.) interest you?
- Are you familiar with the technologies used in this project? If not, are you
  willing to learn them along the way?
- How is the community of this project?

There are many sources of information that you can look up for: the project
website, documentation, past issues, discussion, etc. Also, feel free to reach
out to the moderators or maintainers of the project if you are interested to
learn more - they are more than welcome to answer your questions.

## Step 2: Set up a local environment for the project with Git & GitHub

After choosing a project to contribute, you need to be able to run the project
locally and familiarize yourself with the codebase. Here are some basic steps to
set up a local project (remember that this may vary in different projects, so
make sure to read the project’s specific README/documentation thoroughly):

**Prerequisties:** You already have a GitHub account and installed Git. If not,
please [sign up to GitHub](https://github.com/signup) and
[install Git](https://git-scm.com/downloads).

1. Open your Command Line (cmd) or PowerShell, and
   [navigate to the folder](https://riptutorial.com/cmd/example/8646/navigating-in-cmd)
   that you want to store your project on your computer (e.g: `D:\Projects>`).
   Then, we will `clone` the project (i.e. creating a copy of the project on
   your computer)

   ![Get the link from your project. Note that you can clone via HTTPS or SSH, it’s up to you.](Open-sourc%203f08c/github-clone.png)

   Get the link from your project. Note that you can clone via HTTPS or SSH,
   it’s up to you.

   ```jsx
   D:\Projects>git clone <project-github-link>
   ```

   **Quick Note:** Cloning via HTTPS is easier to set up, while SSH is more
   preferred because it’s more secure. If this is the first time you are using
   Git, you may want to clone with HTTPS. If you decide to do so, then you may
   be prompted to enter your credentials. Before you can enter them
   successfully, you’ll need to set up your identity (which should be the same
   as your Github account) through `config`

   ```jsx
   git config --global user.name "John Doe"
   git config --global user.email johndoe@example.com
   ```

   Next, you need to set up a Personal Access Token (PAT) to let Git verify that
   it’s actually you when you sign in. Don’t worry, setting one up isn’t hard.
   Follow
   [this article](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)
   to generate a PAT for yourself.

2. Now, you may need to refer to the documentation to see additional setup
   requirements (e.g: install dependencies, create a virtual environment, etc.),
   in order to run the project locally. When you are able to run the project on
   your own computer/machine, you can move on to the next step!

## Step 3: Claiming issues

In order to keep track of the work left to be done for a project, GitHub allows
users to create Issues. These are essentially tasks that can be assigned to
different people, with a description that describes the work to be done. Issues
can be created for any sort of improvement to a project. For example, adding a
new feature, fixing a bug, improving documentation, etc.

![Issues Tab.png](Open-sourc%203f08c/Issues_Tab.png)

Now, typically there are 2 things you can do to start working:

- Pick an issue from the Issues list (via Github) and working on that
- Create an issue (can be a feature, a bug, etc.)

## Step 4: Contribution - Coding Phrase

Can you start coding right now? Of course, yes, but you shouldn’t. One common
practice is to make a different branch to work on. A `branch` is a separate
version of the repository that diverges from the main working project, which
means whatever you do in your branch will not affect other branches (until you
merge manually or via PR).

```jsx
D:\Projects\your-project>git checkout -b <your-branch-name> #create a new branch and switch current branch to that new branch
```

Now, you are good to grind the code! After you do some changes to the codebase,
you may want to `add` files to the staging area. Basically, this will tell git
what files you want to save. This is important because those files will be
attached to your future commit.

```jsx
D:\Projects\your-project>git add . # The dot means you want to add all changed files. If you want to add specific files, you can replace the dot with your files name
```

Now we can create a `commit`, which is a snapshot of your Git repository at one
point in time. Basically, it saves the work you did in the files you added. You
can view all your changes in the commit history, which can be helpful for your
future reference.

```jsx
D:\Projects\your-project>git commit -m "Your commit message" # create a commit with files in stanging area and custom messages
```

When you are ready, you can `push` your work to Github (i.e. publish your code).
This will send GitHub your saved work (from your commits). After pushing the
code successfully, you (and everyone who has access to the project) will be able
to view your new code on GitHub.

```jsx
D:\Projects\your-project>git push origin <your-branch-name>
```

Bonus: In case you want to switch to another branch to view the code, you can
`checkout` that branch.

```jsx
D:\Projects\your-project>git checkout <branch-name-you-want-to-switch>
```

## Step 5: Making a Pull Request (PR)

You are almost done! This is the last step where you are making a request to
have your work merged into the main branch for development (typically `master`,
`main`, or `develop`, the documentation will tell you which branch you should
make a PR to). You will do so by making a Pull Request (PR).

![You will need to choose the target branch and your own development branch, and check if there is any conflict. Then you will need a PR](Open-sourc%203f08c/github-pr.png)

You will need to choose the target branch and your own development branch, and
check if there is any conflict. Then you will need a PR

![There will be a PR template that you need to fill in so as to describe your changes. Also, for the contest, make sure to assign project mentors to be your PR reviewers! Then you can proceed to create a PR!](Open-sourc%203f08c/Untitled.png)

There will be a PR template that you need to fill in so as to describe your
changes. Also, for the contest, make sure to assign project mentors to be your
PR reviewers! Then you can proceed to create a PR!

After making a PR, the moderators/maintainers of the project will review your PR
(aka your code) and give you feedback. In case your PR is not approved yet, you
can get feedback to improve your code. Otherwise, your code will be merged and
you can view it on the project. Congratulations! You already made a huge step!
Keep it going!
