import * as core from "@actions/core";
import * as github from "@actions/github";

const repoTokenInput = core.getInput("repo-token", { required: true });
const githubClient = github.getOctokit(repoTokenInput);

async function run(): Promise<void> {
  
  const containsString: string = core.getInput("containsString");
  const body: string =
    (githubContext.payload.pull_request?.body as string) ?? "";

  core.debug(`PR Body: ${body}`);
    if (!body.includes(containsString)) {
      core.setFailed(`PR body does not contain ${containsString}`);
   }
}

run().catch((error) => {
  core.setFailed(error);
});
