type Props = {};

function Privacy({}: Props) {
  return (
    <div className="my-10 mx-8 space-y-4 ">
      <p className="text-2xl font-bold">Privacy Policy</p>

      <p className="text-lg font-semibold py-3">Effective Date: [Insert Date]</p>
   <div className="text-2xl text-[#6d6d6d] space-y-6">
          <p>
            1. Introduction Bill Bizz ("we," "us," or "our") is committed to
            protecting the privacy of our users. This Privacy Policy outlines how we
            collect, use, disclose, and protect your information when you use the
            Bill Bizz platform. By accessing or using our platform, you agree to the
            terms of this Privacy Policy.
          </p>
          <p>
            2. Information We Collect We may collect the following types of
            information: <br /> Personal Information: Name, email address, phone
            number, business details, and payment information. <br /> Transactional
            Data: Records of purchases, invoices, and payments processed through the
            platform. <br />
            Usage Data: Information on how you interact with the platform, including
            log files, device information, and cookies.
          </p>
          <p>
            3. How We Use Your Information We use the collected data to: Provide and
            maintain our services. <br /> Improve platform functionality and user
            experience. <br /> Communicate updates, security alerts, and support
            messages. <br />
            Ensure compliance with legal and regulatory requirements.
          </p>
          <p>
            4. Data Sharing and Security <br /> We do not sell or rent user data to
            third parties. <br /> We may share data with trusted third-party service
            providers for payment processing, analytics, or legal compliance. <br />{" "}
            We implement industry-standard security measures to protect user data
            from unauthorized access.
          </p>
          <p>
            5. User Rights and Choices Users have the right to: <br />
            Access, update, or delete their personal information. <br />
            Opt out of marketing communications. <br />
            Request a copy of their stored data, subject to verification.
          </p>
          <p>
            6. Cookies and Tracking Technologies Bill Bizz uses cookies and similar
            tracking technologies to enhance user experience. Users can manage
            cookie preferences through browser settings.
          </p>
          <p>
            7. Third-Party Integrations Bill Bizz may offer integrations with
            third-party services. Users acknowledge that these services operate
            under their own privacy policies, and we are not responsible for any
            data issues arising from their use
          </p>
          <p>
            8. Governing Law This Privacy Policy is governed by the laws of the
            jurisdiction in which Bill Bizz operates. Any disputes arising from this
            policy will be resolved through arbitration or legal proceedings in the
            designated jurisdiction.
          </p>
          <p>
            9. Limitation of Liability Bill Bizz provides its services "as is" and
            does not guarantee uninterrupted or error-free operation. We are not
            liable for any: <br />
            Financial losses resulting from platform use. <br />
            Data breaches caused by third-party service providers. <br />
            Indirect or incidental damages related to the use of our platform.
          </p>
          <p>
            10. Policy Updates We reserve the right to modify this Privacy Policy at
            any time. Continued use of the platform after updates constitutes
            acceptance of the revised policy.
          </p>
   </div>
    </div>
  );
}

export default Privacy;
