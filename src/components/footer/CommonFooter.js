import React from 'react';
import { Layout} from 'antd';
const { Footer } = Layout;


export default function CommonFooter() {
    return(
        <Footer style={{"zIndex":1}}>
            <div id="footer-col-container" >

                <div className="col-md-2 col bottom-bordered-col closed" id="products-col-mobile">

                    <p className="list-header collapse-arrow-after">Transparency</p>
                    <ul className="hidden-xs hidden-sm ">

                        <a className="ft-prod-links   " id="ft_prod_health_insurance" title="Compare health insurance plans" href="https://www.ehealthinsurance.com/">
                            Health Insurance
                        </a>

                        <a className="ft-prod-links   " id="ft_prod_medicare" title="Medicare Insurance" href="https://www.ehealthinsurance.com/medicare">
                            Medicare
                        </a>

                        <a className="ft-prod-links   " id="ft_prod_special_enrollment_period" title="Learn what a special enrollment period is" href="https://resources.ehealthinsurance.com/affordable-care-act/special-enrollment-period-obamacare">
                            Special Enrollment Period
                        </a>

                        <a className="ft-prod-links   " id="ft_prod_maternity_coverage" title="Learn about maternity coverage" href="https://www.ehealthinsurance.com/maternity-insurance-coverage">
                            Maternity Coverage
                        </a>

                        <a className="ft-prod-links   " id="ft_prod_ppo_plans" title="Details on PPO plans" href="https://www.ehealthinsurance.com/health-plans/ppo">
                            PPO Plans
                        </a>

                        <a className="ft-prod-links   " id="ft_prod_ehmedicare" title="eHealth Medicare insurance" target="_blank" href="https://www.ehealthmedicare.com">
                            eHealth Medicare
                        </a>

                    </ul>
                </div>

                <div className="col-md-3  col bottom-bordered-col closed" id="services-col-mobile">

                    <p className="list-header collapse-arrow-after">Customization</p>
                    <ul className="hidden-xs hidden-sm ">

                        <a className="ft-serv-links   " id="ft_serv_obamacare_made_simple" title="What you need to know about Obamacare" target="_blank" href="https://www.ehealthinsurance.com/obamacare">
                            Obamacare Made Simple
                        </a>

                        <a className="ft-serv-links   " id="ft_serv_affordable_care_act" title="ACA resource center" target="_blank" href="https://resources.ehealthinsurance.com/affordable-care-act">
                            Affordable Care Act
                        </a>

                        <a className="ft-serv-links   " id="ft_serv_plans_by_state" title="Search health insurance plans by state" href="https://www.ehealthinsurance.com/low-cost-health-insurance">
                            Medical Plans by State
                        </a>

                        <a className="ft-serv-links   " id="ft_serv_health_insurance_companies" title="Find health insurance companies" href="https://www.ehealthinsurance.com/health-insurance-companies">
                            Health Insurance Companies
                        </a>

                        <a className="ft-serv-links   " id="ft_serv_find_a_doctor" title="Health insurance plans with your doctor" target="_blank" href="https://doctor.ehealthinsurance.com">
                            Find a Doctor
                        </a>

                        <a className="ft-serv-links   " id="ft_serv_medicaid" title="Medicaid" target="_blank" href="https://www.ehealthinsurance.com/medicaid">
                            Medicaid
                        </a>

                        <a className="ft-serv-links   " id="ft_serv_customer_service" title="Get Customer Service Assistance" href="https://www.ehealthinsurance.com/ehi/core/customer-service">
                            Customer Service
                        </a>

                        <a className="ft-serv-links   " id="ft_serv_drug_service" title="Find prescription drug savings" href="https://www.ehealthinsurance.com/prescription-drugs">
                            Prescription Drug Savings
                        </a>

                    </ul>
                </div>

                <div className="col-md-2  col bottom-bordered-col closed" id="company-col-mobile">

                    <p className="list-header collapse-arrow-after">Risk and Compliance</p>
                    <ul className="hidden-xs hidden-sm ">

                        <a className="ft-comp-links   " id="ft_comp_about_us" title="Learn more about eHealth" href="https://www.ehealthinsurance.com/about-ehealth-index">
                            About Us
                        </a>

                        <a className="ft-comp-links   " id="ft_comp_careers" title="Find eHealth career opportunities" href="https://www.ehealthinsurance.com/about-ehealth/careers">
                            Careers
                        </a>

                        <a className="ft-comp-links   " id="ft_comp_licensing" title="See license brokers by state" href="https://www.ehealthinsurance.com/about-ehealth/licensing">
                            Licensing
                        </a>

                        <a className="ft-comp-links   " id="ft_comp_terms_of_use" title="See our terms of use" href="https://www.ehealthinsurance.com/about-ehealth/terms-of-use">
                            Terms Of Use
                        </a>

                        <a className="ft-comp-links   " id="ft_comp_privacy_policy" title="See our privacy policy" href="https://www.ehealthinsurance.com/about-ehealth/privacy-policy">
                            Privacy Policy
                        </a>

                        <a className="ft-comp-links   " id="ft_comp_affiliate_program" title="See affiliate programs" target="_blank" href="https://www.ehealthinsurance.com/about-ehealth/affiliate-program">
                            Affiliate Program
                        </a>

                    </ul>
                </div>

                <div className="col-md-1  col bottom-bordered-col closed" id="connect-col-mobile">

                    <p className="list-header collapse-arrow-after">Micro Service</p>
                    <ul className="hidden-xs hidden-sm ">

                        <a className="ft-conn-links   " target="_blank" href="https://www.facebook.com/eHealth"><span className="link-icon"></span>
                            Facebook
                        </a>

                        <a className="ft-conn-links   " id="ft_conn_twitter" title="" target="_blank" href="http://twitter.com/ehealth"><span className="link-icon"></span>
                            Twitter
                        </a>

                        <a className="ft-conn-links   " id="ft_conn_googleplus" title="" target="_blank" href="https://plus.google.com/+eHealthInsurance/posts"><span className="link-icon"></span>
                            Google Plus
                        </a>

                        <a className="ft-conn-links   " id="ft_conn_youtube" title="" target="_blank" href="http://www.youtube.com/user/eHealthInsurance"><span className="link-icon"></span>
                            YouTube
                        </a>

                        <a className="ft-conn-links   " id="ft_conn_linkedin" title="" target="_blank" href="http://www.linkedin.com/company/ehealthinsurance"><span className="link-icon"></span>
                            LinkedIn
                        </a>

                    </ul>
                </div>

            </div>
        </Footer>
    )

}