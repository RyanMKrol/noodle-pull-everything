# noodle-pull-everything

A handy little tool to pull every package from a GitHub user's profile (up to 100)!

## Motivation

I have recently reset my machine, and didn't want to go through the hassle of running `git clone` on near 50 packages. So I made this little tool to make that setup process easier for myself and others.

## Usage

If you'd like to install this tool on your machine run:

```
npm install -g noodle-pull-everything
```

Then run:

```
noodle-pull-everything
```

Or if you would like to run this just once, use:

```
npx noodle-pull-everything
```

Then when prompted just give the tool the name of the user you'd like to fetch data for, and let it do it's thing!

It will pull all of the repositories into the current folder, so make sure you're happy to pull everything into that folder first.

## Limitations

It's worth noting that this tool will only pull the first 100 repositories for a given user. The GitHub API does support pagination, but personally I have no need for this functionality so haven't gone to the effort to pull multiple pages.
