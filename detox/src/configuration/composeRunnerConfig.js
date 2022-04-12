// @ts-nocheck
/**
 * @param {Detox.DetoxConfig} globalConfig
 * @param {Detox.DetoxConfigurationOverrides} localConfig
 */
function composeRunnerConfig({ globalConfig, cliConfig }) {
  const customRunnerConfig = cliConfig.runnerConfig || globalConfig.runnerConfig || globalConfig['runner-config'];

  return {
    runnerConfig: customRunnerConfig || 'e2e/config.json',
    specs: globalConfig.specs || '',
  };
}

module.exports = composeRunnerConfig;
