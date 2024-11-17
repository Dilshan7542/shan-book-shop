export class RegexService {
    static NUMBER=/^[0-9]{1,}$/
    static NUMBER_0_99 = /^(0[1-9]|[1-9][0-9]|[1-9])$/;
    static CHARACTER = /^([A-Z]|[a-z]){1}$/;
    static ENGLISH_LETTER = /^([A-Z]|[a-z]){1,1}$/;
    static NIC= /^(?:19|20)?\d{2}[0-9]{10}$|^[0-9]{9}[x|X|v|V]$/;
    static PHONE=/^(?:\+?94|0)?[5-9][0-9]{8}$/;
    static EMAIL=/^[a-zA-Z][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    static NAME=/^[a-zA-Z]+$/;
    static NIC_AND_PHONE = /^\d{9}[VXvx]|\d{12}$|^(?:\+?94|0)?[5-9][0-9]{8}$/;
    static NIC_INPUT=/^[0-9xXvV]+$/;
    static PHONE_INPUT=/^[+0-9]+$/;
    static NAME_REGEX="^[a-zA-Z'\\-\\s]+$";
    static BASE64 = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/;
}

