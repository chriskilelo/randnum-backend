/**
 * TO GOD BE ALL THE GLORY 
 * 15-JUL-2023 || 0917
 * This file will have general utility functions that can support various operations through out the application
 */

/**
 * @desc    Generate a random string
 * @access  Private
 */
const generateRandomCharacters = (length) => {
    let result = ''
    const characters = process.env.DEFAULT_RANDOM_STRING_CHARACTERS
    const charactersLength = characters.length
    let counter = 0
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength))
        counter += 1
    }
    return result
}

/**
 * @desc    Generate a random string
 * @access  Private
 */
const composeRandomString = () => {
    // Generate random strings in batches
    const batch01 = generateRandomCharacters(9)
    const batch02 = generateRandomCharacters(3)
    const batch03 = generateRandomCharacters(6)
    const batch04 = generateRandomCharacters(2)
    const batch05 = generateRandomCharacters(8)
    // Stitch the random string batches into a single string
    return batch01 + '-' + batch02 + '-' + batch03 + '-' + batch04 + '-' + batch05
}

/**
 * @desc    Generate the current date and time stamp
 * @access  Private
 */
const generateDateTimeStamp = () => {
    // Empty the strings (house keeping)
    var timeString = ''
    var dateString = ''

    // Return a date object with the current date and time
    var currentDateTime = new Date()

    // From the generated [ currentDateTime ] object above, derive the current day, month, year, hours, minutes and seconds
    var day = currentDateTime.getDate()
    var month = currentDateTime.getMonth() + 1 // We are adding 1 because January is returned as 0 and not as 1
    var year = currentDateTime.getFullYear()
    var hours = currentDateTime.getHours()
    var minutes = currentDateTime.getMinutes()
    var seconds = currentDateTime.getSeconds()

    // If the day is a single digit, LEFT PAD it with a zero
    day = (day < 10) ? padTimestampItem(day) : day

    // If the month is a single digit, LEFT PAD it with a zero
    month = (month < 10) ? padTimestampItem(month) : month

    // If the minutes are a single digit, LEFT PAD them with a zero
    minutes = (minutes < 10) ? padTimestampItem(minutes) : minutes

    // If the seconds are a single digit, LEFT PAD them with a zero
    seconds = (seconds < 10) ? padTimestampItem(seconds) : seconds

    // Stitch together the hours, minutes and seconds to make a time stamp
    timeString += hours + ":" + minutes + ":" + seconds + "";

    // Check whether it is after midday or not
    (hours > 11) ? timeString += "PM" : timeString += "AM"

    // Stitch together the day, month and year to make a date stamp
    dateString = year + '-' + month + '-' + day

    // Stitch together the date and the time to make a date-time stamp
    return dateString + ' ' + timeString;
}

/**
 * @desc This function will pad-left with  single zeros the digits on a timestamp
 * @access Private
 */
const padTimestampItem = (item2Pad) => {
    // Convert to string and remove any leading or trailing white spaces
    item2PadSanitized = item2Pad.toString().trim()
    // Trim the string passed in and check its length
    if (item2PadSanitized.length == 1) {
        // Means it is a single digit, therefore pad-left with a one zero
        item2PadSanitized = '0' + item2PadSanitized
    } else {
        // Means it's most likely a double digit therefore DO NOTHING
    }
    // Return padded digit
    return item2PadSanitized
}

/**
 * Export the functions and values in this module to allow 
 * for them to be accessed and used in other parts of this application
 */
module.exports = {
    composeRandomString, generateRandomCharacters, generateDateTimeStamp, padTimestampItem
}