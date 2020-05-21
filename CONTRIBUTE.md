# How to Create a Merge Request in this Project (command line)
Clone the project!!

`git clone git@github.com:basil-issac/tree-classifier-mapper.git`

When you're ready to start developing, create a branch using this command:

`git checkout -b <your_name>/<description>`
`Ex: git checkout -b basil/integrating-firebase`

Develop on this branch, and set the upstream branch to master so you can track diffs:

`git branch --set-upstream-to master`

When you're ready to make a commit, add the files you've changed using:

`git add file-you-changed.txt`

OR add all files by

`git add .`

And commit the files using:

`git commit -m "message about what you did"`

And submit the commit for a merge review and request:

`git push -u origin`

The command line output will look something like this:

```
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 12 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 521 bytes | 521.00 KiB/s, done.
Total 3 (delta 2), reused 0 (delta 0)
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
remote: 
remote: Create a pull request for 'branch-name' on GitHub by visiting:
remote:      https://github.com/basil-issac/tree-classifier-mapper/pull/new/branch-name
remote: 
To github.com:basil-issac/tree-classifier-mapper.git
 * [new branch]      branch-name -> branch-name`
 ```

 Copy and paste the link provided and create a pull request to the repo.  Be sure to add reviewers on the right hand side!
