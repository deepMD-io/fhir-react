// import '@testing-library/jest-dom/extend-expect';
// NOTE: jest-dom adds handy assertions to Jest and is recommended, but not required

import React from 'react';
import { render } from '@testing-library/react';
import Observation from '../Observation';

test('shows the children when the checkbox is checked', () => {
  const mockResource = {
    subject: {
      reference: 'Patient/f8fedcd9e6e5',
    },
    identifier: [
      {
        value: 'Te4K6zjiXtD2Z7Fdc.AXXOK4fRc9ik5zXUAuWq9v65uAB',
        system: 'https:open-ic.epic.com',
      },
    ],
    meta: {
      lastUpdated: '2019-12-02T09:10:48.517Z',
      versionId: '9000000000000',
    },
    status: 'preliminary',
    effectiveDateTime: '2015-10-03T20:20:00.000Z',
    comments:
      'This is a corrected result. Previous result was 44 on 10/3/2015 at 1522 CDT',
    referenceRange: [
      {
        low: {
          unit: '%',
          code: '%',
          system: 'http://unitsofmeasure.org',
          value: 41,
        },
        high: {
          unit: '%',
          code: '%',
          system: 'http://unitsofmeasure.org',
          value: 53,
        },
        text: '41 - 53 %',
      },
    ],
    issued: '2015-10-03T20:20:00Z',
    code: {
      coding: [
        {
          system: 'http://loinc.org',
          code: '4544-3',
          display: 'Hematocrit [Volume Fraction] of Blood by Automated count',
        },
      ],
      text: 'HEMATOCRIT (%) BY AUTOMATED COUNT',
    },
    resourceType: 'Observation',
    category: {
      coding: [
        {
          system: 'http://hl7.org/fhir/observation-category',
          code: 'laboratory',
          display: 'Laboratory',
        },
      ],
      text: 'Laboratory',
    },
    valueQuantity: {
      unit: '%',
      code: '%',
      system: 'http://unitsofmeasure.org',
      value: 41,
    },
    id: 'f8fedcd9e6e504829903a55284cc88babb16d6f3d78b50da',
  };

  const defaultProps = {
    fhirResource: { ...mockResource },
  };
  const { container } = render(<Observation {...defaultProps} />);

  expect(container).not.toBeNull();
});
