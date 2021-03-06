Contribute to the Progress Spark Toolkit
===

*Help us improve the Progress Spark Toolkit*

* [Report an Issue](#bug "Learn how to report an issue")
* [Request a Feature](#request "Learn how to submit a feature or improvement request")
* [Contribute to the Code Base](#contribute "Learn how to submit your own improvements to the code")

<a name="bug"></a>Report an Issue
===

If you find a bug in the source code or a mistake in the documentation, you can submit an issue to our <a href="https://github.com/progress/Spark-Toolkit">GitHub Repository</a>.
Before you submit your issue, search the archive to check if a similar issues has been logged or addressed. This will let us focus on fixing issues and adding new features.
If your issue appears to be a bug, and hasn't been reported, open a new issue. To help us investigate your issue and respond in a timely manner, you can provide is with the following details.

* **Overview of the issue:** Provide a short description of the visible symptoms. If applicable, include error messages, screen shots, and stack traces.
* **Motivation for or use case:** Let us know how this particular issue affects your work.
* **Spark version:** List the current version of the Progress Spark Toolkit. You can find it by viewing the server.log file of any running instance.
* **System configuration:** Provide us with relevant system configuration information such as operating system, network connection, proxy usage, etc. Let us know if you have been able to reproduce the issue on multiple setups.
* **Steps to reproduce:** If applicable, submit a step-by-step walkthrough of how to reproduce the issue.
* **Related issues:** If you discover a similar issue in our archive, give us a heads up - it might help us identify the culprit.
* **Suggest a fix:** You are welcome to suggest a bug fix or pinpoint the line of code or the commit that you believe has introduced the issue.


<a name="request"></a>Request a Feature
===

You can request a new feature by submitting an issue with the *enhancement* label to our <a href="https://github.com/progress/Spark-Toolkit">GitHub Repository</a>.
If you want to implement a new feature yourself, consider submitting it to the <a href="https://github.com/progress/Spark-Toolkit">GitHub Repository</a> as a Pull Request.


<a name="contribute"></a>Contribute to the Code Base
===

Before you submit a Pull Request, consider the following guidelines.

* By submitting a pull request, you represent that you have the right to license your contribution to Progress and the community, and agree by submitting the patch that your contributions are licensed under the <a href="https://github.com/progress/Spark-Toolkit/blob/master/LICENSE">progress/Spark-Toolkit license</a>. Notwithstanding the above, we reserve the right to ask you to sign a Contributor License Agreement (CLA) for larger changes.
* Search <a href="https://github.com/progress/Spark-Toolkit/pulls">GitHub</a> for an open or closed Pull Request that relates to your submission.
* Clone the repository.

```
git clone git@github.com:progress/Spark-Toolkit.git
```
* Initialize the submodule.
```
git submodule init
```
* Fetch data from the submodule.
```
git submodule update
```
* Make your changes in a new `git` branch. We use the <a href="http://nvie.com/posts/a-successful-git-branching-model/">Gitflow branching model</a> so you will have to branch from our develop branch.

* Commit your changes and create a descriptive commit message (the commit message is used to generate release notes).
```
git commit -a
```
* Push your branch to GitHub.
```
git push origin my-fix-branch
```
* In GitHub, send a Pull Request to Spark-Toolkit:master
* If we suggest changes, you can modify your branch, rebase, and force a new push to your GitHub repository to update the Pull Request.
```
git rebase master -i git push -f
```

That's it! Thank you for your contribution!

When the patch is reviewed and merged, you can safely delete your branch and pull the changes from the main (upstream) repository.

* Delete the remote branch on GitHub.
```
git push origin --delete my-fix-branch
```
* Check out the develop branch.
```
git checkout master -f
```
* Delete the local branch.
```
git branch -D my-fix-branch
```
* Update your develop branch with the latest upstream version.
```
git pull --ff upstream master
```
