import { DynamicModule, Logger, Module } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

export const PLUGIN_PATH = path.normalize(
  path.join(process.cwd(), 'dist/modules'),
);

@Module({
  controllers: [],
})
export class KeeperModule {
  public static async registerPluginsAsync(): Promise<DynamicModule> {
    return this.loadPlugins();
  }

  private static loadPlugins(): Promise<DynamicModule> {
    Logger.log(`Loading plugins from ${PLUGIN_PATH}`, 'loadPlugins');

    const loadedPlugins: Array<Promise<DynamicModule>> = [];
    this.searchPluginsInFolder(PLUGIN_PATH).forEach((filePath) => {
      loadedPlugins.push(
        this.loadPlugin(filePath).then((module) => module as DynamicModule),
      );
    });

    return Promise.all(loadedPlugins).then((allPlugins: DynamicModule[]) => {
      console.log('All modules resolved: ', allPlugins.length, 'plugins');

      return {
        module: KeeperModule,
        imports: [...allPlugins],
      } as DynamicModule;
    });
  }

  private static loadPlugin(pluginPath: string): Promise<DynamicModule> {
    const modulePlugin = import(pluginPath);
    return modulePlugin;
  }

  private static searchPluginsInFolder(folder: string): string[] {
    return this.recFindByExt(folder, 'js');
  }

  private static recFindByExt(
    base: string,
    ext: string,
    files?: string[],
    result?: string[],
  ): any[] {
    files = files || fs.readdirSync(base);
    result = result || [];

    files.forEach((file) => {
      const newbase = path.join(base, file);
      if (fs.statSync(newbase).isDirectory()) {
        result = this.recFindByExt(
          newbase,
          ext,
          fs.readdirSync(newbase),
          result,
        );
      } else {
        if (file.substr(-1 * (ext.length + 13)) === 'controller.' + ext) {
          if (result) {
            result.push(newbase);
          }
        }
      }
    });
    return result;
  }
}
