import * as core from "@actions/core";
import * as github from "@actions/github";

async function run(): Promise<void> {
  const containsString: string = core.getInput("containsString");
  const body: string =
    (github.context.payload.pull_request?.body as string) ?? "";

  core.debug(`PR Body: ${body}`);
  if (!body.includes(containsString)) {
    core.setFailed(`PR body does not contain ${containsString}`);
  } else {
    console.log("String found 🎉");
    core.setOutput("contains", true);
  }
}

run().catch((error) => {
  core.setFailed(error);
});
