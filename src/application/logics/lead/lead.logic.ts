import Lead from "../../../domain/lead/lead.model";
import LeadDto from "../../models/dtos/lead.dto";

class LeadLogic {
  public addLead(leadDto: any) {
    console.log("Lead Logic");
    return Lead.create({
      firstName: leadDto.firstName,
      lastName: leadDto.lastName,
      phoneNumber: leadDto.phoneNumber,
      alternativePhoneNumber: leadDto.alternativePhoneNumber,
      email: leadDto.email
    }).then(result => {
      console.log("Lead Created");
      return result;
    });
  }

}

export default LeadLogic;
