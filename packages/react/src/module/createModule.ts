import { Module } from '../types';

export function createModule<State>(module: Module<State>): Module<State> {
  return module;
}
