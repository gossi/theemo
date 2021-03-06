import Token from '../../../token';
import { FigmaToken } from '../token';

export default interface Referencer {
  setup(): Promise<void>;

  /**
   * Find reference for given name and style
   *
   * @param name
   * @param type
   */
  find(name: string, type: string): string | undefined;

  findData(name: string, type: string): unknown;

  compileToken(token: FigmaToken): Token;
}
