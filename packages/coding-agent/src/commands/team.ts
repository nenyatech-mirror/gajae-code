import { Command } from "@gajae-code/utils/cli";
import { runBridgedRuntimeEndpoint } from "./gjc-runtime-bridge";

export default class Team extends Command {
	static description = "Run private GJC team orchestration commands";
	static strict = false;
	static examples = ["$ gjc team api claim-task --input '<json>' --json"];

	async run(): Promise<void> {
		await runBridgedRuntimeEndpoint("team", this.argv);
	}
}
