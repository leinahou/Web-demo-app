// Show different fields based on selected management operation
function commandSelection_Management() {
    document.getElementById("getVar").style.visibility = "visible";
    document.getElementById("setVar").style.visibility = "visible";
    document.getElementById("showDialog").style.visibility = "visible";
    document.getElementById("getSignature").style.visibility = "visible";
    document.getElementById("showMessage").style.visibility = "visible";
    document.getElementById("doSignature").style.visibility = "visible";
    document.getElementById("showThankYou").style.visibility = "visible";
    document.getElementById("getPinBlock").style.visibility = "visible";

    //hide fields of unseleted managements
    if (document.getElementById("command_Management").value != "A02")
        document.getElementById("getVar").style.visibility = "hidden";
    if (document.getElementById("command_Management").value != "A04")
        document.getElementById("setVar").style.visibility = "hidden";
    if (document.getElementById("command_Management").value != "A06")
        document.getElementById("showDialog").style.visibility = "hidden";
    if (document.getElementById("command_Management").value != "A08")
        document.getElementById("getSignature").style.visibility = "hidden";
    if (document.getElementById("command_Management").value != "A10")
        document.getElementById("showMessage").style.visibility = "hidden";
    if (document.getElementById("command_Management").value != "A20")
        document.getElementById("doSignature").style.visibility = "hidden";
    if (document.getElementById("command_Management").value != "A24")
        document.getElementById("showThankYou").style.visibility = "hidden";
    if (document.getElementById("command_Management").value != "A28")
        document.getElementById("getPinBlock").style.visibility = "hidden";
}
//Show different fields based on selected full integration management operation
function commandSelection_Management_Fullintegrate() {
    document.getElementById("inputAccountWithEMV").style.visibility = "visible";
    document.getElementById("authorizeCard").style.visibility = "visible";
    document.getElementById("completeOnlineEMV").style.visibility = "visible";
    document.getElementById("removeCard").style.visibility = "visible";

    if (document.getElementById("command_Management_Full").value != "A40")
        document.getElementById("authorizeCard").style.visibility = "hidden";
    if (document.getElementById("command_Management_Full").value != "A42")
        document.getElementById("completeOnlineEMV").style.visibility = "hidden";
    if (document.getElementById("command_Management_Full").value != "A44")
        document.getElementById("removeCard").style.visibility = "hidden";
    if (document.getElementById("command_Management_Full").value != "A50")
        document.getElementById("inputAccountWithEMV").style.visibility = "hidden";
}
//Start sending manage request
function manageStart() {
    if (document.getElementById("command_Management").value == "A00")
        return BASIC(document.getElementById("command_Management").value);
    if (document.getElementById("command_Management").value == "A02")
        return GETVAR(document.getElementById("command_Management").value);
    if (document.getElementById("command_Management").value == "A04")
        return SETVAR(document.getElementById("command_Management").value);
    if (document.getElementById("command_Management").value == "A06")
        return SHOWDIALOG(document.getElementById("command_Management").value);
    if (document.getElementById("command_Management").value == "A08")
        return GETSIGNATURE(document.getElementById("command_Management").value);
    if (document.getElementById("command_Management").value == "A10")
        return SHOWMESSAGE(document.getElementById("command_Management").value);
    if (document.getElementById("command_Management").value == "A12")
        return BASIC(document.getElementById("command_Management").value);
    if (document.getElementById("command_Management").value == "A14")
        return BASIC(document.getElementById("command_Management").value);
    if (document.getElementById("command_Management").value == "A16")
        return BASIC(document.getElementById("command_Management").value);
    if (document.getElementById("command_Management").value == "A20")
        return DOSIGNATURE(document.getElementById("command_Management").value);
    if (document.getElementById("command_Management").value == "A24")
        return SHOWTHANKYOU(document.getElementById("command_Management").value);
    if (document.getElementById("command_Management").value == "A26")
        return BASIC(document.getElementById("command_Management").value);
    if (document.getElementById("command_Management").value == "A28")
        return GETPINBLOCK(document.getElementById("command_Management").value);
}
//Start sending full integration manage request
function manageStart_Fullintegrate() {
    if (document.getElementById("command_Management_Full").value == "A40")
        return AUTHORIZECARD(document.getElementById("command_Management_Full").value);
    if (document.getElementById("command_Management_Full").value == "A42")
        return COMPLETEONLINEEMV(document.getElementById("command_Management_Full").value);
    if (document.getElementById("command_Management_Full").value == "A44")
        return REMOVECARD(document.getElementById("command_Management_Full").value);
    if (document.getElementById("command_Management_Full").value == "A50")
        return INPUTACCOUNTWITHEMV(document.getElementById("command_Management_Full").value);
}

//Basic: function for INIT, CLEARMESSAGE, RESET, REBOOT
function BASIC(comm) {
    result = stx + comm + fs + version + etx;
    str = toBase64(result + getlrc(result));
    return str;
}

function GETVAR(comm) {
    edcType = document.getElementById("tender_Type_Getvar").value;
    varname = document.getElementById("varname_getVar").value;
    varname1 = document.getElementById("varname1_getVar").value;
    varname2 = document.getElementById("varname2_getVar").value;
    varname3 = document.getElementById("varname3_getVar").value;
    varname4 = document.getElementById("varname4_getVar").value;

    result = stx + comm + fs + version + fs + edcType + fs
        + varname + fs + varname1 + fs + varname2 + fs + varname3 + fs
        + varname4 + fs + etx;
    str = toBase64(result + getlrc(result));
    return str;
}

function SETVAR(comm) {
    edcType = document.getElementById("tender_Type_Setvar").value;
    varName1 = document.getElementById("varname_setVar").value,
        varValue1 = document.getElementById("varvalue_setVar").value,
        varName2 = document.getElementById("varname1_setVar").value,
        varValue2 = document.getElementById("varvalue1_setVar").value,
        varName3 = document.getElementById("varname2_setVar").value,
        varValue3 = document.getElementById("varvalue2_setVar").value,
        varName4 = document.getElementById("varname3_setVar").value,
        varValue4 = document.getElementById("varvalue3_setVar").value,
        varName5 = document.getElementById("varname4_setVar").value,
        varValue5 = document.getElementById("varvalue4_setVar").value

    result = stx + comm + fs + version + fs + edcType + fs + varName1 + fs
        + varValue1 + fs + varName2 + fs + varValue2 + fs
        + varName3 + fs + varValue3 + fs + varName4 + fs + varValue4 + fs
        + varName5 + fs + varValue5 + etx;
    str = toBase64(result + getlrc(result));
    return str;
}

function SHOWDIALOG(comm, title, button1, button2, button3, button4, timeout) {
    title = document.getElementById("title_showDialog").value;
    button1 = document.getElementById("button1_showDialog").value;
    button2 = document.getElementById("button2_showDialog").value;
    button3 = document.getElementById("button3_showDialog").value;
    button4 = document.getElementById("button4_showDialog").value;
    timeout = document.getElementById("timeout_showDialog").value;

    result = stx + comm + fs + version + fs + title + fs + button1 + fs + button2 + fs
        + button3 + fs + button4 + fs + timeout + etx;
    str = toBase64(result + getlrc(result));
    return str;
}

function GETSIGNATURE(comm) {
    offset = 0;
    result = stx + comm + fs + version + fs + offset + fs + etx;
    str = toBase64(result + getlrc(result));
    return str;
}

function SHOWMESSAGE(comm) {
    title = document.getElementById("title_showMessage").value;
    disMsg = document.getElementById("displayMessage_showMessage").value;
    disMsg2 = document.getElementById("displayMessage2_showMessage").value;
    topDown = document.getElementById("topDown_showMessage").value;
    taxLine = document.getElementById("taxLine_showMessage").value;
    totalLine = document.getElementById("totalLine_showMessage").value;
    imageName = document.getElementById("imageName_showMessage").value;
    imageDescription = document.getElementById("imageDescription_showMessage").value;

    result = stx + comm + fs + version + fs + disMsg + fs + title + fs
        + disMsg2 + fs + topDown + fs + taxLine + fs + totalLine + fs
        + imageName + fs + imageDescription + etx;
    temp = stx + "A10" + fs + "1.31" + fs + "Hello World" + etx;
    return (toBase64(temp + getlrc(temp)));
    //return (toBase64(result + getlrc(result)));
}

function DOSIGNATURE(comm) {
    uploadflag = "0";
    HRN = "";
    EDCType = "00";
    Timeout = "300";
    result = stx + comm + fs + version + fs + uploadflag + fs + HRN + fs + EDCType + fs + Timeout + etx;
    str = toBase64(result + getlrc(result));
    return str;
}
function SHOWTHANKYOU(comm) {
    title = document.getElementById("title_showThankYou").value;
    msg1 = document.getElementById("msg1_showThankYou").value;
    msg2 = document.getElementById("msg2_showThankYou").value;
    timeout = document.getElementById("timeout_showThankYou").value;

    result = stx + comm + fs + version + fs + title + fs + msg1 + fs + msg2 + fs
        + timeout + etx;
    str = toBase64(result + getlrc(result));
    return str;
}
function GETPINBLOCK(comm, title, accountNum, encryptionType, keySlot, nullPinFlag, pinMaxLength, pinMinLength, pinAlgorithm, timeout) {
    title = document.getElementById("title_getPinBlock").value;
    accountNum = document.getElementById("accountNum_getPinBlock").value;
    encryptionType = document.getElementById("encryptionType_getPinBlock").value;
    keySlot = document.getElementById("keySlot_getPinBlock").value;
    nullPinFlag = document.getElementById("nullPinFlag_getPinBlock").value;
    pinMaxLength = document.getElementById("pinMaxLen_getPinBlock").value;
    pinMinLength = document.getElementById("pinMinLen_getPinBlock").value;
    pinAlgorithm = document.getElementById("pinAlgorithm_getPinBlock").value;
    timeout = document.getElementById("timeout_getPinBlock").value;

    edcType = "02";
    transactionType = "01";
    result = stx + comm + fs + version + fs + accountNum + fs + encryptionType + fs
        + keySlot + fs + pinMinLength + fs + pinMaxLength + fs + nullPinFlag + fs
        + pinAlgorithm + fs + timeout + fs + edcType + fs + transactionType + fs
        + title + etx;
    str = toBase64(result + getlrc(result));
    return str;
}

/* 
full integration managements:
    INPUTACCOUNTWITHEMV
    AUTHORIZECARD
    COMPLETEONLINEEMV
    REMOVECARD 
*/

function INPUTACCOUNTWITHEMV(comm) {
    edcType = document.getElementById("tender_Type_InputAccountWithEMV").value;
    transType = document.getElementById("transType_InputAccountWithEMV").value;
    amt = document.getElementById("amount_InputAccountWithEMV").value;
    cashback = document.getElementById("cashBack_InputAccountWithEMV").value;
    amountinfo = AMOUNTINFOMATION_FULL(amt, cashback);
    magSwipe = document.getElementById("magSwipe_InputAccountWithEMV").value;
    manual = document.getElementById("manual_InputAccountWithEMV").value;
    contactless = document.getElementById("contactless_InputAccountWithEMV").value;
    contactEMV = document.getElementById("contactEMV_InputAccountWithEMV").value;
    fallback = document.getElementById("fallback_InputAccountWithEMV").value;
    laserScanner = document.getElementById("laserScanner_InputAccountWithEMV").value;
    frontCam = document.getElementById("frontCam_InputAccountWithEMV").value;
    rearCam = document.getElementById("rearCam_InputAccountWithEMV").value;
    addPrompts = "";
    expDatePrompt = document.getElementById("expDatePrompt_InputAccountWithEMV").value;
    cvvPrompt = document.getElementById("CVVPrompt_InputAccountWithEMV").value;
    zip = document.getElementById("zipcodePrompt_InputAccountWithEMV").value;
    encryption = document.getElementById("encryption_InputAccountWithEMV").value;
    keySlot = document.getElementById("keyslot_InputAccountWithEMV").value;
    padding = document.getElementById("padding_InputAccountWithEMV").value;
    trackDataSen = document.getElementById("trackDataSen_InputAccountWithEMV").value;
    min = document.getElementById("minAccountLength_InputAccountWithEMV").value;
    max = document.getElementById("maxAccountLength_InputAccountWithEMV").value;
    terminalConfig = "";
    tagList = document.getElementById("tagList_InputAccountWithEMV").value;
    timeout = document.getElementById("timeout_InputAccountWithEMV").value;
    ext = document.getElementById("extDate_InputAccountWithEMV").value;

    result = stx + comm + fs + version + fs + edcType + fs + transType + fs + amountinfo + fs
        + magSwipe + fs + manual + fs + contactless + fs + contactEMV + fs + fallback + fs
        + laserScanner + fs + frontCam + fs + rearCam + fs + addPrompts + fs + encryption + fs
        + keySlot + fs + padding + fs + trackDataSen + fs + min + fs + max + fs
        + terminalConfig + fs + tagList + fs + timeout + fs + ext + etx;
    str = toBase64(result + getlrc(result));
    return str;
}

function AMOUNTINFOMATION_FULL(amt, cashback) {
    tip = "";
    merchantfee = "";
    tax = "";
    fuel = "";

    result = amt + us + tip + us + cashback + us + merchantfee + us + tax + us + fuel;
    return result;
}
function AUTHORIZECARD(comm) {
    amt = document.getElementById("amount_AuthorizeCard").value;
    cashback = document.getElementById("cashBack_AuthorizeCard").value;
    amountinfo = AMOUNTINFOMATION_FULL(amt, cashback);
    merchantDecision = document.getElementById("merchantDecision_AuthorizeCard").value;
    encryption = document.getElementById("encryption_AuthorizeCard").value;
    keySlot = document.getElementById("keyslot_AuthorizeCard").value;
    pinMinLength = document.getElementById("pinMinLength_AuthorizeCard").value;
    pinMaxLength = document.getElementById("pinMaxLength_AuthorizeCard").value;
    pinBypass = "";
    pinAlgorithm = "";
    terminalConfig = "";
    tagList = "";
    timeout = document.getElementById("timeout_AuthorizeCard").value;
    ext = document.getElementById("extDate_AuthorizeCard").value;

    result = stx + comm + fs + version + fs + amountinfo + fs + merchantDecision + fs
        + encryption + fs + keySlot + fs + pinMinLength + fs + pinMaxLength + fs
        + pinBypass + fs + pinAlgorithm + fs + terminalConfig + fs + tagList + fs
        + timeout + fs + ext + etx;
    str = toBase64(result + getlrc(result));
    return str;
}
function COMPLETEONLINEEMV(comm) {
    onlineAuthResult = document.getElementById("onlineAuthResult_CompleteOnlineEMV").value;
    responseCode = document.getElementById("responseCode_CompleteOnlineEMV").value;
    authCode = document.getElementById("authCode_CompleteOnlineEMV").value;
    issuerAuthData = document.getElementById("issuerAuthData_CompleteOnlineEMV").value;
    issueScript1 = document.getElementById("issueScript1_CompleteOnlineEMV").value;
    issueScript2 = document.getElementById("issueScript2_CompleteOnlineEMV").value;
    tagList = document.getElementById("tagList_CompleteOnlineEMV").value;
    ext = document.getElementById("extDate_CompleteOnlineEMV").value;

    result = stx + comm + fs + version + fs + onlineAuthResult + fs + responseCode + fs
        + authCode + fs + issuerAuthData + fs + issueScript1 + fs + issueScript2 + fs
        + tagList + fs + ext + etx;
    str = toBase64(result + getlrc(result));
    return str;
}
function REMOVECARD(comm) {
    message1 = document.getElementById("message1_RemoveCard").value;
    message2 = document.getElementById("message2_RemoveCard").value;
    ext = document.getElementById("extDate_RemoveCard").value;

    result = stx + comm + fs + version + fs + message1 + fs + message2 + fs
        + ext + fs + etx;
    str = toBase64(result + getlrc(result));
    return str;
}

function UPDATEIMAGE(comm) {
    co = "A18"
    offset = "0";
    flag = "0";
    data = "UEsDBBQAAAAIABCDr05VkbjVfwEAAAIDAAAGAAAAc2FtcC5ydVK7TsMwFD1paKKWyEFthxQZsjKm6kCkIiqxIwZ+wJ8QJrrVokMWPspRBkZ+wRE/kJGhElw7j4aBk1z76Ob45vjqPjyOXFjcU9xQPFNsKBx6OszOmxihiR+C2ZTaeRCRUMUEqjgGSCIt1Cf28t3k1f7tCVsZUH4ptzLEGnehErFcySlu8e3rJFZrLHAJHWSkj6notaO8JIkEozxzpJdlkWKYI3COodEHWOIMO1+KmPYh2IAHA+4P+OKf/HzAJ/gDnwXwGLdnnZyB8RQIAffgg0ep/ZdT5uBp1hyoSplmGvAML2Ri+Jh4Vil6YfuaCE2fGj2J6Uij4ekLlWrA+frQeWTRJmdt9z0WM97e0Weh5QZubq01/INFScud8mCt2W4VZS26O+qy1l2vsspYw4XhSV0oNH7I3JfsesvTV3R6Hm3NNrPmuBke0xMyF3R2jDnL7YC5ubU2HvDWXN3XdArd51Hpvj4y1WuwUifNRp54bNfFgM8GUzG1q3eSt7NzhV9QSwECHwAUAAAACAAQg69OVZG41X8BAAACAwAABgAkAAAAAAAAACAAAAAAAAAAc2FtcC5yCgAgAAAAAAABABgAiDK6NFwL1QE2CxqXEw/VARsT7TNcC9UBUEsFBgAAAAABAAEAWAAAAKMBAAAAAA==";
    result = stx + co + fs + version + fs + offset + fs + data + fs + flag + etx;
    str = toBase64(result + getlrc(result));
    alert(getlrc(result));
    return str;
}

function PRINTER(comm) {
    command = "A60";
    printData = "\\$Header\\C\\3\\CSTORE-1\\n\\C\\1Address line 1\\n\\C\\1Address line 2\\n\\C\\1New York 77418\\n\\C\\1Phone: 7741879999\\n\\L\\1\\$Date\\n\\R\\1\\$Time\\n\\L\\1SN\\R\\$SN#\\n\\L\\1Invoice: TRANS#12313\\R\\1Cashier: First Name\\n\\C\\2For: Customer Name\\$TrailerItem\\CQty\\RPrice\\n\\1Item name\\1\\CX 1\\1\\R$10.00\\n\\1Discount: ($-1.00)\\2\\R$9.00\\$Header\\1Item Total\\R$9.00\\n\\1Discount\\R$1.00\\n\\1Tax\\R$1.00\\n\\1Tip\\R$1.00\\nTotal\\R$11.00\\$Trailer\\2\\L[APPROVED]\\n\\2\\RCredit Card: $10.05\\n\\L\\3CREDIT SALE\\n\\L\\1Terminal ID No.:\\1\\R133131333\\n\\L\\1Transaction #:\\1\\R133131333\\n\\L\\1Card Type:\\1\\R133131333\\n\\L\\1Account:\\1\\R133131333\\n\\L\\1Entry:\\1\\R133131333\\n\\L\\1HREF:\\1\\R133131333\\n\\L\\1Global UID:\\1\\R133131333\\n\\L\\1Auth. Code:\\1\\R133131333\\n\\L\\1Batch #:\\1\\R133131333\\n\\L\\1AID:\\1\\R133131333\\$Trailer\\C\\1Thank you.\\n\\C\\1This is for testing. Kindly ignore this.\\$Trailer";
    result = stx + command + fs + version + fs + fs + printData + etx;
    str = toBase64(result + getlrc(result));
    alert(str);
    return str;
}
