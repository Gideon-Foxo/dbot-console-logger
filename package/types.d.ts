/**
 * Logs an error
 * @param text - Text description of the error
 * @param objects - Error object 
 */
export function error (text: string, objects: unknown = null): void
/**
 * Logs an error
 * @param text - Text description of the error
 * @param objects - Error object 
 */
export function err (text: string, objects: unknown = null): void
/**
 * Logs an error
 * @param text - Text description of the error
 * @param objects - Error object 
 */
export function e (text: string, objects: unknown = null): void


/**
 * Logs a warning
 * @param text - Text description of the warning
 * @param objects - Warning object 
 */
export function warn (text: string, objects: unknown = null): void
/**
 * Logs a warning
 * @param text - Text description of the warning
 * @param objects - Warning object 
 */
export function warning (text: string, objects: unknown = null): void
/**
 * Logs a warning
 * @param text - Text description of the warning
 * @param objects - Warning object 
 */
export function w (text: string, objects: unknown = null): void


/**
 * Logs a info message
 * @param text - Text description of the info message
 * @param objects - Info message object 
 */
export function info (text: string, objects: unknown = null): void
/**
 * Logs a info message
 * @param text - Text description of the info message
 * @param objects - Info message object 
 */
export function i (text: string, objects: unknown = null): void


/**
 * Logs a debug message
 * @param text - Text description of the debug message
 * @param objects - Debug message object 
 */
export function debug (text: string, objects: unknown = null): void
/**
 * Logs a debug message
 * @param text - Text description of the debug message
 * @param objects - Debug message object 
 */
export function db (text: string, objects: unknown = null): void
/**
 * Logs a debug message
 * @param text - Text description of the debug message
 * @param objects - Debug message object 
 */
export function d (text: string, objects: unknown = null): void


/**
 * Returns formatted date and time to be used for console logging
 */
export function time (): string
/**
 * Returns formatted date and time to be used for console logging
 */
export function timestamp (): string
/**
 * Returns formatted date and time to be used for console logging
 */
export function ts (): string
/**
 * Returns formatted date and time to be used for console logging
 */
export function t (): string

/** Export of chalk - https://www.npmjs.com/package/chalk */
export * as chalk from 'chalk'
/** Export of chalk - https://www.npmjs.com/package/chalk */
export * as c from 'chalk'

/** Export of moment - https://www.npmjs.com/package/moment */
export * as moment from 'moment'
/** Export of moment - https://www.npmjs.com/package/moment */
export * as m from 'moment'