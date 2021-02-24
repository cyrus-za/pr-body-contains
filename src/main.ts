import * as core from "@actions/core";
import * as github from "@actions/github";

function run() {
  const bodyContains: string = core.getInput("bodyContains", {
    required: true,
  });
  const body: string =
    (github.context.payload.pull_request?.body as string) ?? "";

  core.debug(`bodyContains: ${bodyContains}`);
  core.debug(`PR Body: ${body}`);
  if (!body.includes(bodyContains)) {
    core.setFailed(`PR body does not contain ${bodyContains}`);
  } else {
    console.log("String found 🎉");
    core.setOutput("contains", true);
  }
}

run();
