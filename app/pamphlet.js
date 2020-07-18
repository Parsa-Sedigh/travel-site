/* Git has 3 main good stuff:
1) History
2) Collaboration: The process of tracking of changes and COMPARING and merging is what git does. So git merges everyone changes
together. So everyone has the most updated copies of the files.
3) Feature brenches: Imagine one piece of your code is holded by another piece of code like a hostage! and ... (go watch the 
'what is git?' video.) */
/* We know that git can track changes on our project files. So how do we make sure that the changes that we just made,
get saved into git's history? 
A repository is where git saves all of the data, all of the history, all of the changes that it tracks for a particular 
project. So: project = repository(repo)

Working directory: The folder location on your computer, where your project lives. So git's job for this repo is to track
any changes that we make to any of files within the working directory.

Commit: Git doesn't save or store changes that we make into it's history UNTIL we actively COMMIT those changes. You can
think of commit as a secondary save. So when you save in your text editor(ctrl+s), we save files on the hard drive of our 
computer. But with git, nothing would save into git's history database, UNTIL we make a commit. So: commit = git's way of
saving.

The difference between push and commit is that basically git commit puts your changes into your local repo, while git push
sends your changes to the remote location. git push is used to add commits you have done on the local repository to a remote repo.

Staging: In git, Before we allow to commit changes, we first have to stage our changes.For example: When you want to sell
a house, first you have to stage the house.So staging means getting sth ready or preparing something. Now in git, staging
is our chance to have fine grain control on what we're commiting.So staging: control what gets commited.*/
/* When you want git to give you a recap of what we changed lately: git status
When you want to add all of the files to the staging area: git add -A  (remember: When you should add some files to the 
staging area, that they have changed.Right? We don't want to add files that nothing has changed inside them in staging
area, right?). So in staging area, we add files that were have some changes in their code.
Now when you see that you're happy with the staging area, you can now commit those files that are in staging area. So type:
git commit -m '<the message for the commit.Like: Made the header orange.>' After this, you succesfully commited those changes
into git's history.
Now with commits, if your code suddenly deleted from your hard drive, you can type: git checkout -- . After this, your files
are back to the state that they were in, when you made your last commit.

Push and pull: Git stores all of it's history of data in a hidden folder in the root of your git repo. So git stores this data locally
on your hard drive. Now if all of this data is ONLY on your computer it means:
1) If your computer blows up, your repo or project is completely lost.
2) Collaborating  with others would be hard because only you have access to your computer.
Now we can solve this 2 issues by hosting our git repo on a server somewhere. This is what github offers.
Github is just one of many many services that can host your repo or project. Now if you go to commits section in the repo page of
your project in github, you see that your commit that you did earlier is not showing up here and that's because we committed to our
LOCAL copy of our repo but now we need to take what's on our computer hard drive and PUSH it up to
*/
/* When git tracks your changes, it also tracks who's making those changes. So we want git to know about our name and email.
* So: git config --global user.name "<your name>" and git config --global user.email "<your email>"
*
* Learn: For telling git to begin tracking anything happens within a folder, or in other words let's create a brand new repo,
*  For this task, all we do is first navigate inside the folder you want and then type: git init stands for (initialize)
*
* When you write git status , git tells you the changes and the file that been changed.
*
* .DS_STORE is a system file on mac and it's better to tell git to ignore that file.
*
* Learn: Now after you wrote git status to see the files that were changed, you must add those changed files to the staging area so then
*  we can commit those files. So write: git add <the files that were changed and you want to add them to the staging area.>
*  Now you can again use git status to see how things are currently looking. Because after you addes some files that were changed
*  to the staging area, the git status results would be different so we can again look at them and it would show you the files which
*  are ready to commit.
*  Now if the results from git status are good, you can commit your files which are in staging area. So write: git commit -m '<message>'
*  also in windows you might need to use double quotes instead of ' . Now we just make our first commit to the repo.
*
* Now no matter what happens to your files, you can always revert to the way that files were when you made your commit. So all we need
* to do to restore our files back to that last commit would be to write: git checkout -- . and hit enter .
*
* We can also clone an existing repo from server to your hard drive by using git clone <the url>*/
/* In public repo, everyone can see the code but only the owner of that repo can change the code. If you're working with project
* that has config files that contain passwords, you can use private repos.Or don't push those files.
*
* Now after creating a repo on github, you must create a new repo on our computer's hard drive and then once we created it,
* we can push it up to that repo we created in github.
*
* Now if you cloned an existing github repo with git clone ... , you must change the name of that cloned folder to whatever
* the name of your own repo is in the github. So if the cloned folder is travel-site and your github repo for that project you
* want to continue is my-awesome-site, you must rename that cloned folder to my-awesome-site. Now we want to push the cloned folder
* that we cloned from an existing repo on github to our own github repo which it's name is exact as the folder's name.
* So first navigate to the folder you want to push it. Now we want to PUSH this repo up to github servers but because we cloned
* this repo from an existing repo, git will try to push it to it's ORIGINAL destination. So if you type git remote -ve , git will
* show you the server address of where it thinks you want to push this repo to. But that's not where we want to push.
* We want to push to your empty repo that you just created. So we want to update the address that git gives us by running
* git remote -v .
* For doing that, on the overview page for the empty repo that you created, you'll see an address like:
* https://github.com/<your username>/<name of repo>.git
* Copy it and use it in this command: git remote set-url origin <the url of your repo that you just copied> and hit enter.
* For checking that the command was successful, you can write: git remote -v and if that was successful you would see the url of
* your repo. So now whenever we say git to push to the origin, it knows that the origin is your github repo. Now you can push your
* code to your repo. So: git push origin master
* origin stands for your address of repo. */
/* For pushing the changes that you done on your project files, first you can run: git status
* That command will show you the files that has been changed since the last commit. Next you can state your changes on files by
* using: git add -A
* Now if you type: git status again, you can see that your changed files have been staged, which means they are ready to commit.*/
