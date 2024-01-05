import * as core from '@actions/core'
import franc from 'franc-min'

export function isTargetLanguage(
    body: string | null,
    language = 'eng',
): boolean | true {
    if (body === null) {
        return true
    }
    const detectResult = franc(body)
    if (
        detectResult === 'und' ||
    detectResult === undefined ||
    detectResult === null
    ) {
        core.warning(`Can not detect the undetermined comment body: ${body}`)
        return false
    }
    core.info(`Detect comment body language result is: ${detectResult}`)
    return detectResult === language
}
