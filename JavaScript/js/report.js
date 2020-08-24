function reportSelection_Report() {
    document.getElementById("localTotalReport").style.visibility = "visible";
    document.getElementById("localDetailReport").style.visibility = "visible";
    document.getElementById("safSummaryReport").style.visibility = "visible";
    if (document.getElementById("transType_Report").value != "R00")
        document.getElementById("localTotalReport").style.visibility = "hidden";
    if (document.getElementById("transType_Report").value != "R02")
        document.getElementById("localDetailReport").style.visibility = "hidden";
    if (document.getElementById("transType_Report").value != "R10")
        document.getElementById("safSummaryReport").style.visibility = "hidden";
}

function reportStart() {
    if (document.getElementById("transType_Report").value == "R00"){
        return LOCALTOTALREPORT(
            document.getElementById("transType_Report").value,
            document.getElementById("edcTypeTotal_Report").value,
            document.getElementById("cardTypeTotal_Report").value,
        );
    }
        
    if (document.getElementById("transType_Report").value == "R02")
        return LOCALDETAILREPORT(
            document.getElementById("transType_Report").value,
            document.getElementById("edcTypeDetail_Report").value,
            document.getElementById("cardTypeDetail_Report").value,
            document.getElementById("paymentType_Report").value,
            document.getElementById("recordNum_Report").value,
            document.getElementById("refNum_Report").value,
            document.getElementById("authCode_Report").value,
            document.getElementById("ecrRefNum_Report").value,
            document.getElementById("extData_Report").value,
        );
    if (document.getElementById("recordNum_Report").value == "R04")
        return BASICREPORT(document.getElementById("transType_Report").value);
    if (document.getElementById("transType_Report").value == "R06")
        return BASICREPORT(document.getElementById("transType_Report").value);
    if (document.getElementById("transType_Report").value == "R08")
        return BASICREPORT(document.getElementById("transType_Report").value);
    if (document.getElementById("transType_Report").value == "R10")
        return SAFSUMMARYREPORT(
            document.getElementById("transType_Report").value,
            document.getElementById("safIndicator_Report").value    
        );
}

function BASICREPORT(comm) {
    result = stx + comm + fs + version + etx;
    str = toBase64(result + getlrc(result));
    return str;
}

function LOCALTOTALREPORT(comm, edcType, cardType) {
    result = stx + comm + fs + version + fs + edcType + fs 
            + cardType + etx;
    str = toBase64(result + getlrc(result));
    return str;
}

function LOCALDETAILREPORT(comm, edcType, cardType, paymentType, recordNum, refNum, authCode, ecrRefNum, extData){
    result = stx + comm + fs + version + fs + edcType + fs + paymentType + fs 
            + cardType + fs + recordNum + fs + ecrRefNum + fs
            + authCode + fs + refNum + fs + extData + etx;
    str = toBase64(result + getlrc(result));
    return str;
}

function SAFSUMMARYREPORT(comm, safIndicator){
    result = stx + comm + fs + version + fs + safIndicator + etx;
    str = toBase64(result + getlrc(result));
    return str;
}
